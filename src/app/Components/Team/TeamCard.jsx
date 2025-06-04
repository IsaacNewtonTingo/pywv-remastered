import Image from "next/image";
import React from "react";

export default function TeamCard({ item, read_more, set_read_more }) {
  return (
    <div
      key={item.name}
      className="shadow-lg p-6 text-center bg-gray-100 rounded-lg"
    >
      <div className="relative h-[300px]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-full object-cover"
        />
      </div>

      <h3 className="font-bold text-[20px] my-4">{item.name}</h3>
      <h4 className="text-gray-500 mb-4">{item.title}</h4>

      {read_more ? (
        <p>{item.bio}</p>
      ) : (
        <p>
          {item.bio.length > 200 ? item.bio.slice(0, 199) + "..." : item.bio}
        </p>
      )}

      <button
        onClick={() => set_read_more(!read_more)}
        className="text-orange-500 mt-4 underline cursor-pointer"
      >
        {read_more ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
