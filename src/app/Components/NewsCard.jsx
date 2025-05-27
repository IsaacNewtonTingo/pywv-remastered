import Image from "next/image";
import React from "react";
import moment from "moment";
import Link from "next/link";

export default function NewsCard({ item }) {
  return (
    <Link className="rounded-lg border p-6" href={"#"}>
      <Image
        src={item.image || "/no-image.jpg"}
        alt={item.title}
        width={200}
        height={150}
        className="w-full"
      />
      <h4 className="font-bold mt-6">{item.title}</h4>

      <p className="mt-4 text-sm text-gray-800">{item.preview}</p>

      <hr className="mt-6 text-gray-300" />

      <p className="text-sm text-gray-500 mt-4">
        {item.user.first_name} {item.user.last_name} |{" "}
        {new Date(item.created_at).toLocaleDateString()}
      </p>
    </Link>
  );
}
