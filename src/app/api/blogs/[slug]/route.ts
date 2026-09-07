import { NextRequest } from 'next/server';
import { jsonResponse, handleOptions } from '@/lib/cors';
import { blogs as mockBlogs } from '@/lib/data/mockData';
import { connectDB } from '@/lib/db/mongodb';
import BlogModel from '@/lib/models/Blog';
import { revalidatePath } from 'next/cache';
import mongoose from 'mongoose';

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
      const dbBlog = await BlogModel.findOne({
        $or: [
          { slug },
          { id: slug },
          ...(mongoose.Types.ObjectId.isValid(slug) ? [{ _id: slug }] : []),
        ],
      }).lean();
      if (dbBlog) {
        return jsonResponse(
          {
            success: true,
            data: dbBlog,
          },
          200,
          {
            "Cache-Control": "no-store, no-cache, must-revalidate",
          }
        );
      }
    }
  } catch (err) {
    console.warn("MongoDB GET blog by slug error:", err);
  }

  return jsonResponse(
    { success: false, error: `Blog post '${slug}' not found` },
    404
  );
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
        const orConditions: any[] = [{ slug }, { id: slug }];
        if (body.id) {
          orConditions.push({ id: body.id });
        }
        if (body.slug) {
          orConditions.push({ slug: body.slug });
        }
        if (mongoose.Types.ObjectId.isValid(slug)) {
          orConditions.push({ _id: new mongoose.Types.ObjectId(slug) });
        }

        const updatedDb = await BlogModel.findOneAndUpdate(
          { $or: orConditions },
          { $set: body },
          { new: true }
        ).lean();

        if (updatedDb) {
          try {
            revalidatePath('/blog');
            revalidatePath(`/blog/${slug}`);
            if (body.slug && body.slug !== slug) {
              revalidatePath(`/blog/${body.slug}`);
            }
          } catch (e) {
            console.warn("revalidatePath error:", e);
          }

          return jsonResponse(
            {
              success: true,
              message: 'Blog post updated successfully',
              data: updatedDb,
            },
            200,
            {
              "Cache-Control": "no-store, no-cache, must-revalidate",
            }
          );
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

    try {
      revalidatePath('/blog');
      revalidatePath(`/blog/${slug}`);
    } catch (e) {
      console.warn("revalidatePath error:", e);
    }

    return jsonResponse(
      {
        success: true,
        message: 'Blog post updated successfully',
        data: body,
      },
      200,
      {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      }
    );
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
  let deletedFromDb = false;

  try {
    const conn = await connectDB();
    if (conn) {
      const orConditions: any[] = [{ slug }, { id: slug }];
      if (mongoose.Types.ObjectId.isValid(slug)) {
        orConditions.push({ _id: new mongoose.Types.ObjectId(slug) });
      }
      const res = await BlogModel.deleteOne({ $or: orConditions });
      deletedFromDb = res.deletedCount > 0;

      try {
        revalidatePath('/blog');
        revalidatePath(`/blog/${slug}`);
      } catch (e) {
        console.warn("revalidatePath error:", e);
      }
    }
  } catch (dbErr) {
    console.warn("MongoDB DELETE blog error:", dbErr);
  }

  const index = mockBlogs.findIndex((b) => b.slug === slug || b.id === slug);
  if (index !== -1) {
    mockBlogs.splice(index, 1);
  }

  try {
    revalidatePath('/blog');
  } catch (e) {
    console.warn("revalidatePath error:", e);
  }

  if (deletedFromDb || index !== -1) {
    return jsonResponse({
      success: true,
      message: 'Blog post deleted successfully',
    });
  }

  return jsonResponse({ success: false, error: 'Blog not found' }, 404);
}
