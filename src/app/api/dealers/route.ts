import { NextRequest } from 'next/server';
import { jsonResponse, handleOptions } from '@/lib/cors';
import { mockDealers } from '@/lib/data/mockData';
import { DealerApplication } from '@/lib/types/api';
import { connectDB } from '@/lib/db/mongodb';
import DealerModel from '@/lib/models/Dealer';

export const dynamic = 'force-dynamic';

export async function OPTIONS() {
  return handleOptions();
}

export async function GET() {
  try {
    const conn = await connectDB();
    if (conn) {
      const dbDealers = await DealerModel.find().sort({ createdAt: -1 }).lean();
      return jsonResponse({
        success: true,
        count: dbDealers ? dbDealers.length : 0,
        data: dbDealers || [],
        source: "MongoDB Database",
      });
    }
  } catch (err) {
    console.warn("MongoDB GET dealers error:", err);
  }

  return jsonResponse({
    success: true,
    count: mockDealers.length,
    data: mockDealers,
    source: "Memory Fallback",
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { companyName, contactPerson, email, phone, city, state, country, experienceYears, message } = body;

    if (!companyName || !contactPerson || !email || !phone || !city) {
      return jsonResponse(
        {
          success: false,
          error: 'CompanyName, contactPerson, email, phone, and city are required.',
        },
        400
      );
    }

    const newDealer: DealerApplication = {
      id: `dealer-${Date.now()}`,
      companyName,
      contactPerson,
      email,
      phone,
      city,
      state: state || '',
      country: country || 'India',
      experienceYears: Number(experienceYears) || 0,
      message: message || '',
      status: 'PENDING',
      createdAt: new Date().toISOString(),
    };

    try {
      const conn = await connectDB();
      if (conn) {
        await DealerModel.create(newDealer);
      }
    } catch (dbErr) {
      console.warn("MongoDB POST dealer error:", dbErr);
    }

    mockDealers.unshift(newDealer);

    return jsonResponse(
      {
        success: true,
        message: 'Dealer application submitted successfully. We will review your credentials and contact you.',
        data: newDealer,
      },
      201
    );
  } catch {
    return jsonResponse(
      { success: false, error: 'Invalid JSON request payload' },
      400
    );
  }
}
