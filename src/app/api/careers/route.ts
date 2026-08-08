import { NextRequest } from 'next/server';
import { jsonResponse, handleOptions } from '@/lib/cors';
import { careers } from '@/lib/data/mockData';

export async function OPTIONS() {
  return handleOptions();
}

export async function GET() {
  return jsonResponse({
    success: true,
    count: careers.length,
    data: careers,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { jobId, applicantName, email, phone, coverLetter } = body;

    if (!jobId || !applicantName || !email) {
      return jsonResponse(
        { success: false, error: 'jobId, applicantName, and email are required' },
        400
      );
    }

    return jsonResponse(
      {
        success: true,
        message: 'Application received successfully. Our HR team will contact you if shortlisted.',
        data: {
          applicationId: `app-${Date.now()}`,
          jobId,
          applicantName,
          email,
          phone: phone || '',
          coverLetter: coverLetter || '',
          submittedAt: new Date().toISOString(),
        },
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
