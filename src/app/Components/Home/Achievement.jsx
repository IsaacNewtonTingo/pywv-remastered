"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AchievementCard from "./AchievementCard";

export default function Achievement() {
  const [startCounting, setStartCounting] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  useEffect(() => {
    if (inView) {
      setStartCounting(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="bg-gradient-soft-pink min:h-[400px] w-full p-10 lg:p-32 grid grid-cols-3 gap-20"
    >
      <AchievementCard
        title={300}
        description={"Girls reached"}
        duration={10}
        startCounting={startCounting}
        icon={"/girls-reached.png"}
      />

      <AchievementCard
        title={36000}
        description={"Pads distributed"}
        duration={10}
        startCounting={startCounting}
        icon={"/pads-distributed.png"}
      />

      <AchievementCard
        title={50}
        description={"Training programmes covered"}
        duration={10}
        startCounting={startCounting}
        icon={"/programmes-covered.png"}
      />
    </div>
  );
}
