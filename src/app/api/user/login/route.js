import { connectDB } from "@/app/lib/mongodb";
import user from "@/app/models/user";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return Response.json({
        status: "Failed",
        message: "Email and password are required.",
      });
    }

    const user_data = await user.findOne(
      { email },
      "first_name last_name email prifile_picture password username role_id"
    );
    if (!user_data) {
      return Response.json({
        status: "Failed",
        message: "Invalid credentials.",
      });
    }

    const isMatch = await bcrypt.compare(password, user_data.password);
    if (!isMatch) {
      return Response.json({
        status: "Failed",
        message: "Invalid credentials.",
      });
    }

    return Response.json({
      message: "Login successful",
      data: user_data,
    });
  } catch (error) {
    return Response.json({ status: "Failed", message: "Server error" });
  }
}
