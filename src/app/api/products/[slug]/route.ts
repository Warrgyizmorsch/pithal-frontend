import { NextRequest } from 'next/server';
import { jsonResponse, handleOptions } from '@/lib/cors';
import { products } from '@/lib/data/mockData';

export async function OPTIONS() {
  return handleOptions();
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug || p.id === slug);

  if (!product) {
    return jsonResponse(
      { success: false, error: `Product '${slug}' not found` },
      404
    );
  }

  return jsonResponse({
    success: true,
    data: product,
  });
}
