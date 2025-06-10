const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      trim: true,
    },
    slug: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
    },
    preview: {
      type: String,
      default: null,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    status: {
      type: Number,
      default: 1, //0-deleted 1-active 2-inactive
    },
    read_time: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
