import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ListCard({ item, folder }) {
  return (
    <div
      key={item.title}
      className="rounded-lg bg-gray-100 p-6 text-center flex flex-col items-center  "
    >
      <Image
        src={item.image}
        width={100}
        height={100}
        alt={item.title}
        className="w-auto h-auto"
      />

      <h3 className="font-bold text-[20px] my-10">{item.title}</h3>
      <h3>{item.preview}</h3>

      <Link
        href={`/${folder}/${item.slug}`}
        className={`border border-gray-700 text-orange-500 w-full h-[50px] mt-10 flex items-center justify-center hover:bg-black hover:rounded-lg hover:text-white`}
      >
        View
      </Link>
    </div>
  );
}
