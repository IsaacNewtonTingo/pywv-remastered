import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function AchievementCard({
  title,
  description,
  duration,
  startCounting,
  icon,
}) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let start = 0;
    const incrementAmount = title / ((duration * 1000) / 10);
    const incrementTime = 10; // Increment every 10 milliseconds

    const timer = setInterval(() => {
      start += incrementAmount;
      if (start >= title) {
        setNumber(title);
        clearInterval(timer);
      } else {
        setNumber(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [startCounting, title, duration]);

  return (
    <div className="text-[#d47100] border-l-[1px] border-l-[#f9ceff] pl-8 h-[180px] flex flex-col justify-center">
      <Image
        src={icon}
        width={100}
        height={100}
        alt={description}
        className=""
      />
      <p className="font-black text-[60px] lg:text-[40px]">
        {number.toLocaleString()} +
      </p>
      <p className="text-[25px] text-[#6e6e6e] font-bold">{description}</p>
    </div>
  );
}
