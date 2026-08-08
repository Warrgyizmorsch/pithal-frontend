import { jsonResponse, handleOptions } from '@/lib/cors';
import { categories } from '@/lib/data/mockData';

export async function OPTIONS() {
  return handleOptions();
}

export async function GET() {
  return jsonResponse({
    success: true,
    count: categories.length,
    data: categories,
  });
}
