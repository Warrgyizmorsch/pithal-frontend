import { NextRequest } from 'next/server';
import { jsonResponse, handleOptions } from '@/lib/cors';
import { mockDealers } from '@/lib/data/mockData';
import { DealerApplication } from '@/lib/types/api';

export async function OPTIONS() {
  return handleOptions();
}

export async function GET() {
  return jsonResponse({
    success: true,
    count: mockDealers.length,
    data: mockDealers,
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
