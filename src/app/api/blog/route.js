import { connectDB } from "@/app/lib/mongodb";
import blog from "@/app/models/blog";
import user from "@/app/models/user";
const cheerio = require("cheerio");

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { user_id, title, preview, content, image } = body;
    const existing_user = await user.findById(user_id);
    if (
      existing_user &&
      (existing_user.role_id == 2 || existing_user.role_id == 1)
    ) {
      if (!user_id) {
        return Response.json({
          status: "Failed",
          message: "User ID is required",
        });
      } else if (!title) {
        return Response.json({
          status: "Failed",
          message: "Post title is required",
        });
      } else if (!content) {
        return Response.json({
          status: "Failed",
          message: "Post content is required",
        });
      } else {
        const read_time = await getReadTime(content);
        const data = await blog.create({
          user_id,
          title,
          slug: await getSlug(title),
          content,
          image,
          preview,
          read_time,
        });

        return Response.json({
          status: "Success",
          message: "Post created successfully",
          data,
        });
      }
    } else {
      return Response.json({
        status: "Failed",
        message: "You don't have permission to perform this operation",
      });
    }
  } catch (error) {
    console.log(error);
    return Response.json({
      status: "Failed",
      message: "An error occured",
    });
  }
}

async function getReadTime(content) {
  const wordsPerMinute = 200;
  const plainContent = stripHtmlTags(content);
  const words = plainContent.split(/\s+/).length;
  const readTime = Math.ceil(words / wordsPerMinute);

  return readTime;
}

function stripHtmlTags(html) {
  const $ = cheerio.load(html);
  return $.text();
}

async function getSlug(name) {
  let slug = name.toLowerCase().replace(/\s+/g, "-");
  slug = slug.replace(/[^\w-]+/g, "");

  const existing = await blog.findOne({ slug });
  if (existing) {
    const rndm = Math.floor(100000 + Math.random() * 900000).toString();
    return slug + "-" + rndm;
  } else {
    return slug;
  }
}
