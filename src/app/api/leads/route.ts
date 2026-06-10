import { NextResponse } from "next/server";
import pool from "@/lib/db";

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
    const { name, company, country, capacity, requirement, source } = body;

    if (!name || !company || !requirement) {
      return NextResponse.json(
        { success: false, error: "Name, Company, and Requirement are required" },
        { status: 400 }
      );
    }

    const finalCountry = country || "N/A";
    const finalCapacity = capacity || "N/A";
    const finalSource = source || "Quick Inquiry";

    const [result] = await pool.query(
      "INSERT INTO leads (name, company, country, capacity, requirement, status, source) VALUES (?, ?, ?, ?, ?, 'pending', ?)",
      [name, company, finalCountry, finalCapacity, requirement, finalSource]
    );

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully",
      leadId: (result as any).insertId,
    });
  } catch (error) {
    console.error("POST Leads API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save lead" },
      { status: 500 }
    );
  }
}
