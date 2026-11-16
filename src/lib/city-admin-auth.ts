import "server-only";
import { timingSafeEqual } from "node:crypto";
import UserModel from "@/lib/models/User";
import { DEFAULT_USERS } from "@/app/api/users/route";

// Reuse the existing portal accounts. Only content roles can change city pages.
export async function canManageCities(request: Request): Promise<boolean> {
  const email = request.headers.get("x-city-admin-email")?.trim().toLowerCase();
  const password = request.headers.get("x-city-admin-password");
  if (!email || !password) return false;
  const escapedEmail = email.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const account = await UserModel.findOne({ email: new RegExp(`^${escapedEmail}$`, "i") }).lean() || DEFAULT_USERS.find(user => user.email.toLowerCase() === email);
  if (!account || account.status !== "Active" || !["Super Admin", "Admin", "Content Editor"].includes(account.role)) return false;
  const actual = Buffer.from(password);
  const expected = Buffer.from(account.password || "");
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}
