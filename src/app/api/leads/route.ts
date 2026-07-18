import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import pool from "@/lib/db";

const EMAIL_TO = "mangilal2001.warrgyizmorsch@gmail.com";
const EMAIL_FROM = process.env.EMAIL_FROM || process.env.SMTP_USER || "no-reply@pithalmachine.com";
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587", 10);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_SECURE = process.env.SMTP_SECURE === "true";
const SMTP_CONFIGURED = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);

function getTransporter() {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

// GET handler: Fetch all leads for dashboard
export async function GET() {
  try {
    const [rows] = await pool.query(
      "SELECT id, name, company, country, capacity, requirement, status, source, DATE_FORMAT(date, '%Y-%m-%d') as date FROM leads ORDER BY id DESC"
    );
    return NextResponse.json({ success: true, leads: rows });
  } catch (error) {
    console.error("GET Leads API Error:", error);
    return NextResponse.json(
      { success: false, error: "Database query failed" },
      { status: 500 }
    );
  }
}

// POST handler: Create a new lead from Contact form
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      company,
      country,
      capacity,
      requirement,
      source,
      email,
      phone,
      industry,
    } = body;

    if (!name || !company || !requirement || !email || !phone || !industry) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, Company, Email, Phone, Industry, and Requirement are required",
        },
        { status: 400 }
      );
    }

    const finalCountry = country || "N/A";
    const finalCapacity = capacity || "N/A";
    const finalSource = source || "Quick Inquiry";

    if (!SMTP_CONFIGURED) {
      return NextResponse.json(
        {
          success: false,
          error: "SMTP is not configured. Email cannot be sent.",
        },
        { status: 500 }
      );
    }

    const transporter = getTransporter();
    const mailText = [
      "New Contact Us inquiry received.",
      "",
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Industry/Sector: ${industry}`,
      `Country: ${finalCountry}`,
      `Capacity: ${finalCapacity}`,
      `Source: ${finalSource}`,
      "",
      "Requirement:",
      requirement,
    ].join("\n");

    await transporter.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `Contact Inquiry from ${name}`,
      text: mailText,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("POST Leads API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save lead" },
      { status: 500 }
    );
  }
}
