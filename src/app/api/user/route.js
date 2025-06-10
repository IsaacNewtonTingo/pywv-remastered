import { connectDB } from "@/app/lib/mongodb";
import user from "@/app/models/user";
import bcrypt from "bcrypt";

export async function GET() {
  await connectDB();
  const users = await user.find();
  return Response.json(users);
}
