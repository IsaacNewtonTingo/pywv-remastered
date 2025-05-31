import Image from "next/image";
import React from "react";

export default function Partners() {
  const partners = [
    {
      logo: "/hivos.jpg",
    },
    {
      logo: "/unaids.webp",
    },
    {
      logo: "/ajws.png",
    },
    {
      logo: "/gnp.svg",
    },
    {
      logo: "/purposeful.webp",
    },
  ];
  return (
    <div className="px-6 lg:px-40 py-20 bg-black mt-20">
      <h2 className="text-white font-bold mb-10">Our Partners</h2>
      <div className="logos">
        <div className="logos-slide flex gap-10">
          {partners.map((item) => (
            <Image
              key={item.logo}
              src={item.logo}
              alt={item.logo}
              width={300}
              height={300}
              className="w-[200px] h-[100px] object-contain lg:w-[100px]"
            />
          ))}

          {partners.map((item) => (
            <Image
              key={item.logo}
              src={item.logo}
              alt={item.logo}
              width={300}
              height={300}
              className="object-contain lg:w-[100px]"
            />
          ))}
          {partners.map((item) => (
            <Image
              key={item.logo}
              src={item.logo}
              alt={item.logo}
              width={300}
              height={300}
              className="object-contain lg:w-[100px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
