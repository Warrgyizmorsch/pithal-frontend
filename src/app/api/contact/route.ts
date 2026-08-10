import { NextRequest } from 'next/server';
import { jsonResponse, handleOptions } from '@/lib/cors';
import { ContactSubmission } from '@/lib/types/api';

const contactSubmissions: ContactSubmission[] = [];

export const dynamic = 'force-dynamic';

export async function OPTIONS() {
  return handleOptions();
}

export async function GET() {
  return jsonResponse({
    success: true,
    count: contactSubmissions.length,
    data: contactSubmissions,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return jsonResponse(
        { success: false, error: 'Name, email, and message are required fields' },
        400
      );
    }

    const submission: ContactSubmission = {
      id: `contact-${Date.now()}`,
      name,
      email,
      phone: phone || '',
      subject: subject || 'General Inquiry',
      message,
      createdAt: new Date().toISOString(),
    };

    contactSubmissions.unshift(submission);

    return jsonResponse(
      {
        success: true,
        message: 'Thank you for reaching out! We will respond to your message shortly.',
        data: submission,
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
