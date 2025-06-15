import Image from "next/image";
import React from "react";
import moment from "moment";
import Link from "next/link";

export default function NewsCard({ item }) {
  return (
    <Link
      className="rounded-lg border p-6 flex flex-col justify-between"
      href={`blog/${item.slug}`}
    >
      <div className="relative h-[300px]">
        <Image
          src={item.image || "/no-image.jpg"}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <h4 className="font-bold mt-6">{item.title}</h4>

      <p className="mt-4 text-sm text-gray-800">{item.preview}</p>

      <p className="text-sm border-t pt-4 border-t-gray-300 text-gray-500 mt-4">
        {item.user_id.first_name} {item.user_id.last_name} |{" "}
        {new Date(item.createdAt).toLocaleDateString()}
      </p>
    </Link>
  );
}
