import { NextRequest } from 'next/server';
import { jsonResponse, handleOptions } from '@/lib/cors';
import { blogs as mockBlogs } from '@/lib/data/mockData';
import { connectDB } from '@/lib/db/mongodb';
import BlogModel from '@/lib/models/Blog';

export const dynamic = 'force-dynamic';

export async function OPTIONS() {
  return handleOptions();
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const conn = await connectDB();
    if (conn) {
      const dbBlog = await BlogModel.findOne({ slug }).lean();
      if (dbBlog) {
        return jsonResponse({
          success: true,
          data: dbBlog,
        });
      }
    }
  } catch (err) {
    console.warn("MongoDB GET blog by slug error, using fallback:", err);
  }

  const blog = mockBlogs.find((b) => b.slug === slug);

  if (!blog) {
    return jsonResponse(
      { success: false, error: `Blog post '${slug}' not found` },
      404
    );
  }

  return jsonResponse({
    success: true,
    data: blog,
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();

    try {
      const conn = await connectDB();
      if (conn) {
        const updatedDb = await BlogModel.findOneAndUpdate(
          { $or: [{ slug }, { id: slug }] },
          body,
          { new: true }
        ).lean();
        if (updatedDb) {
          return jsonResponse({
            success: true,
            message: 'Blog post updated successfully',
            data: updatedDb,
          });
        }
      }
    } catch (dbErr) {
      console.warn("MongoDB PUT blog error:", dbErr);
    }

    const index = mockBlogs.findIndex((b) => b.slug === slug || b.id === slug || b.id === body.id);

    if (index !== -1) {
      mockBlogs[index] = {
        ...mockBlogs[index],
        ...body,
      };
    }

    return jsonResponse({
      success: true,
      message: 'Blog post updated successfully',
      data: body,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return jsonResponse({ success: false, error: errorMessage }, 500);
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const conn = await connectDB();
    if (conn) {
      await BlogModel.deleteOne({ $or: [{ slug }, { id: slug }] });
    }
  } catch (dbErr) {
    console.warn("MongoDB DELETE blog error:", dbErr);
  }

  const index = mockBlogs.findIndex((b) => b.slug === slug || b.id === slug);

  if (index === -1) {
    return jsonResponse({ success: false, error: 'Blog not found' }, 404);
  }

  const deleted = mockBlogs.splice(index, 1)[0];

  return jsonResponse({
    success: true,
    message: 'Blog post deleted successfully',
    data: deleted,
  });
}
