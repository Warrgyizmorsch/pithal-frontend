import { NextResponse } from "next/server";
import pool from "@/lib/db";

// GET handler: Fetch all dealer applications (for dashboard if needed)
export async function GET() {
  try {
    const [rows] = await pool.query(
      "SELECT id, name, company, country, business_type, experience, status, DATE_FORMAT(date, '%Y-%m-%d') as date FROM dealers ORDER BY date DESC"
    );
    return NextResponse.json({ success: true, dealers: rows });
  } catch (error) {
    console.error("GET Dealers API Error:", error);
    return NextResponse.json(
      { success: false, error: "Database query failed" },
      { status: 500 }
    );
  }
}

// POST handler: Create a new dealer application
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, country, business_type, experience } = body;

    if (!name || !company || !country || !business_type || !experience) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const [result] = await pool.query(
      "INSERT INTO dealers (name, company, country, business_type, experience, status) VALUES (?, ?, ?, ?, ?, 'pending')",
      [name, company, country, business_type, experience]
    );

    return NextResponse.json({
      success: true,
      message: "Dealer application submitted successfully",
      applicationId: (result as any).insertId,
    });
  } catch (error) {
    console.error("POST Dealers API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save application" },
      { status: 500 }
    );
  }
}
