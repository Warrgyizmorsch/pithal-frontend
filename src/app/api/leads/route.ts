import { NextRequest } from 'next/server';
import { jsonResponse, handleOptions } from '@/lib/cors';
import { mockLeads } from '@/lib/data/mockData';
import { Lead } from '@/lib/types/api';
import { connectDB } from '@/lib/db/mongodb';
import LeadModel from '@/lib/models/Lead';

export async function OPTIONS() {
  return handleOptions();
}

export async function GET() {
  try {
    const conn = await connectDB();
    if (conn) {
      const dbLeads = await LeadModel.find().sort({ createdAt: -1 }).lean();
      return jsonResponse({
        success: true,
        count: dbLeads ? dbLeads.length : 0,
        data: dbLeads || [],
        source: "MongoDB Database",
      });
    }
  } catch (err) {
    console.warn("MongoDB GET leads error, using fallback:", err);
  }

  return jsonResponse({
    success: true,
    count: mockLeads.length,
    data: mockLeads,
    source: "Memory Fallback",
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, name, email, phone, companyName, company, country, capacity, requirement, productInterest, message, sourcePage, source } = body;
    
    const clientName = fullName || name;
    const clientEmail = email || 'Not Provided';
    const clientPhone = phone || 'Not Provided';

    if (!clientName) {
      return jsonResponse(
        {
          success: false,
          error: 'Full Name is a required field.',
        },
        400
      );
    }

    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      fullName: clientName,
      email: clientEmail,
      phone: clientPhone,
      companyName: companyName || company || '',
      productInterest: productInterest || (capacity ? `Capacity: ${capacity} (${country || 'N/A'})` : 'General Inquiry'),
      message: requirement || message || '',
      sourcePage: sourcePage || source || '/contact',
      status: 'PENDING',
      createdAt: new Date().toISOString(),
    };

    // Save to MongoDB
    try {
      const conn = await connectDB();
      if (conn) {
        await LeadModel.create(newLead);
      }
    } catch (dbErr) {
      console.warn("MongoDB POST lead error:", dbErr);
    }

    // Keep memory fallback in sync
    mockLeads.unshift(newLead);

    return jsonResponse(
      {
        success: true,
        message: 'Lead inquiry received successfully! Our sales team will contact you shortly.',
        data: newLead,
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

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return jsonResponse({ success: false, error: 'Lead ID and status are required' }, 400);
    }

    // Update in MongoDB
    try {
      const conn = await connectDB();
      if (conn) {
        await LeadModel.findOneAndUpdate({ id }, { status }, { new: true });
      }
    } catch (dbErr) {
      console.warn("MongoDB PATCH lead error:", dbErr);
    }

    const lead = mockLeads.find((l) => l.id === id);
    if (lead) {
      lead.status = status;
    }

    return jsonResponse({
      success: true,
      message: `Lead status updated to ${status}`,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return jsonResponse({ success: false, error: errorMessage }, 500);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return jsonResponse({ success: false, error: 'Lead ID is required' }, 400);
    }

    // Delete from MongoDB
    try {
      const conn = await connectDB();
      if (conn) {
        await LeadModel.deleteOne({ id });
      }
    } catch (dbErr) {
      console.warn("MongoDB DELETE lead error:", dbErr);
    }

    const index = mockLeads.findIndex((l) => l.id === id);
    if (index !== -1) {
      mockLeads.splice(index, 1);
    }

    return jsonResponse({
      success: true,
      message: `Lead ${id} deleted successfully.`,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return jsonResponse({ success: false, error: errorMessage }, 500);
  }
}
