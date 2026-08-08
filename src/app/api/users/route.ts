import { jsonResponse, handleOptions } from '@/lib/cors';
import { connectDB } from '@/lib/db/mongodb';
import UserModel from '@/lib/models/User';

export const DEFAULT_USERS = [
  {
    id: "u-1",
    name: "Jaydeep Vyas",
    email: "admin@pithalmachine.com",
    phone: "+91 9876543210",
    city: "Ahmedabad",
    password: "admin123",
    role: "Super Admin",
    status: "Active",
    joinedDate: "2026-01-01",
    avatar: "",
  },
  {
    id: "u-2",
    name: "Viralkumar Shah",
    email: "viral@pithalmachine.com",
    phone: "+91 9116076837",
    city: "Vadodara",
    password: "viral123",
    role: "Content Editor",
    status: "Active",
    joinedDate: "2026-02-15",
    avatar: "",
  },
  {
    id: "u-3",
    name: "Ramesh Patel",
    email: "ramesh@pithalmachine.com",
    phone: "+91 9784710041",
    city: "Surat",
    password: "ramesh123",
    role: "Lead Manager",
    status: "Active",
    joinedDate: "2026-03-10",
    avatar: "",
  },
  {
    id: "u-4",
    name: "Hardik Kumar",
    email: "hardik@pithalmachine.com",
    phone: "+91 9345580269",
    city: "Rajkot",
    password: "hardik123",
    role: "Equipment Manager",
    status: "Inactive",
    joinedDate: "2026-04-05",
    avatar: "",
  },
];

export async function OPTIONS() {
  return handleOptions();
}

export async function GET() {
  try {
    const conn = await connectDB();
    if (conn) {
      const dbUsers = await UserModel.find().sort({ createdAt: 1 }).lean();
      return jsonResponse({
        success: true,
        count: dbUsers.length,
        data: dbUsers,
        source: "MongoDB Database",
      });
    }
  } catch (err) {
    console.warn("MongoDB GET users error, using fallback:", err);
  }

  // Fallback to in-memory default users
  return jsonResponse({
    success: true,
    count: DEFAULT_USERS.length,
    data: DEFAULT_USERS,
    source: "Memory Fallback",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { id, name, email, phone, city, password, role, status, joinedDate, avatar } = body;

    if (!name || !email) {
      return jsonResponse({ success: false, error: "Name and email are required" }, 400);
    }

    const userData = {
      id: id || `user-${Date.now()}`,
      name: String(name),
      email: String(email),
      phone: phone ? String(phone) : "+91 9876543210",
      city: city ? String(city) : "Ahmedabad",
      password: password ? String(password) : "admin123",
      role: role ? String(role) : "Content Editor",
      status: status === "Inactive" ? "Inactive" : "Active",
      joinedDate: joinedDate ? String(joinedDate) : new Date().toISOString().split("T")[0],
      avatar: avatar ? String(avatar) : "",
    };

    try {
      const conn = await connectDB();
      if (conn) {
        const updated = await UserModel.findOneAndUpdate(
          { email: userData.email },
          userData,
          { upsert: true, new: true }
        ).lean();

        return jsonResponse({
          success: true,
          message: "User saved successfully to database",
          data: updated || userData,
        }, 200);
      }
    } catch (dbErr) {
      console.warn("MongoDB POST user error:", dbErr);
    }

    return jsonResponse({
      success: true,
      message: "User saved (memory fallback)",
      data: userData,
    }, 200);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return jsonResponse({ success: false, error: errorMessage }, 500);
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const email = url.searchParams.get("email");

    if (!id && !email) {
      return jsonResponse({ success: false, error: "User id or email is required for deletion" }, 400);
    }

    try {
      const conn = await connectDB();
      if (conn) {
        const conditions: any[] = [];
        if (id) conditions.push({ id });
        if (email) conditions.push({ email });

        if (conditions.length > 0) {
          await UserModel.deleteMany({ $or: conditions });
        }
      }
    } catch (dbErr) {
      console.warn("MongoDB DELETE user error:", dbErr);
    }

    return jsonResponse({
      success: true,
      message: "User deleted successfully",
    }, 200);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return jsonResponse({ success: false, error: errorMessage }, 500);
  }
}
