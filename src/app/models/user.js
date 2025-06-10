import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      default: null,
    },
    username: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      required: true,
    },
    profile_picture: {
      type: String,
      trim: true,
      default: null,
    },
    status: {
      type: Number,
      default: 1,
    },
    role_id: {
      type: Number,
      default: 2, //0-super-admin, 1-admin, 2-blogger 3-user
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
