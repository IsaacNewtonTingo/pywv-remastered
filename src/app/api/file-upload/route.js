import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import multer from "multer";
import { NextResponse } from "next/server";
import { Readable } from "stream";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const region = process.env.AWS_DEFAULT_REGION;
const bucketName = process.env.AWS_BUCKET;
const accessKey = process.env.AWS_ACCESS_KEY_ID;
const secretKey = process.env.AWS_SECRET_ACCESS_KEY;
const baseUrl = process.env.AWS_S3_BASE_URL;

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
  },
  region,
});

// Helper to parse form using multer
function runMiddleware(req, fn) {
  return new Promise((resolve, reject) => {
    fn(req, {}, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return NextResponse.json(
      { status: "Failed", message: "No file uploaded" },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `uploads/${uuidv4()}_${file.name}`;

  try {
    await s3.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: fileName,
        Body: buffer,
        ContentType: file.type,
      })
    );

    return NextResponse.json({
      uploaded: true,
      url: `${baseUrl}/${fileName}`,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        status: "Failed",
        message: "An error occurred while uploading image",
      },
      { status: 500 }
    );
  }
}
