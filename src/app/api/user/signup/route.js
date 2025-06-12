import { connectDB } from "@/app/lib/mongodb";
import user from "@/app/models/user";
import bcrypt from "bcrypt";

//create user
export async function POST(req, res) {
  await connectDB();
  const body = await req.json();
  const { first_name, last_name, email, password, username, profile_picture } =
    body;

  if (!first_name || !last_name || !email || !password) {
    return Response.json({
      status: "Failed",
      message: "All fields are required",
    });
  }
  const existing_user = await user.findOne({ email });
  if (existing_user) {
    return Response.json({
      status: "Failed",
      message: "User with the provided email already exists",
    });
  } else {
    user.create({
      first_name,
      last_name,
      email,
      username,
      profile_picture,
      password: await bcrypt.hash(password, 10),
    });

    return Response.json({
      status: "Success",
      message: "User Created Successfully",
    });
  }
}
