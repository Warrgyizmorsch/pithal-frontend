import { NextRequest } from 'next/server';
import { jsonResponse, handleOptions } from '@/lib/cors';
import { products } from '@/lib/data/mockData';
import { Product } from '@/lib/types/api';

export async function OPTIONS() {
  return handleOptions();
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const categorySlug = searchParams.get('category');
  const featured = searchParams.get('featured');
  const query = searchParams.get('search')?.toLowerCase();

  let result: Product[] = [...products];

  if (categorySlug) {
    result = result.filter((p) => p.categorySlug === categorySlug);
  }

  if (featured === 'true') {
    result = result.filter((p) => p.isFeatured);
  }

  if (query) {
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
  }

  return jsonResponse({
    success: true,
    count: result.length,
    data: result,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.name || !body.category) {
      return jsonResponse(
        { success: false, error: 'Product name and category are required' },
        400
      );
    }

    const newProduct: Product = {
      id: `prod-${Date.now()}`,
      slug: body.slug || body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: body.name,
      category: body.category,
      categorySlug: body.categorySlug || 'general',
      shortDescription: body.shortDescription || '',
      description: body.description || '',
      specifications: body.specifications || {},
      features: body.features || [],
      isFeatured: Boolean(body.isFeatured),
    };

    products.push(newProduct);

    return jsonResponse(
      {
        success: true,
        message: 'Product created successfully',
        data: newProduct,
      },
      201
    );
  } catch {
    return jsonResponse({ success: false, error: 'Invalid payload' }, 400);
  }
}
