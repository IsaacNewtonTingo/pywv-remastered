import Image from "next/image";
import React from "react";

export default function VisionMissionValues() {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <div className="flex flex-col items-center w-[50%]">
        <Image
          src={"/vision.png"}
          width={250}
          height={100}
          className=""
          alt="Vision"
        />
        <h4 className="text-center text-[24px] ">
          <strong className="text-orange-500 mt-10">Humanizing</strong> young
          women and adolescent girls in all their diversities
        </h4>
      </div>

      <div className="flex flex-col items-center w-[50%] mt-20">
        <Image
          src={"/mission.png"}
          width={250}
          height={100}
          className=""
          alt="Mision"
        />
        <h4 className="text-center text-[24px] ">
          <strong className="text-orange-500 mt-10">Mentor and advocate</strong>{" "}
          for young women and adolescent girls in all their diversities to
          advance their rights through access to inclusive healthcare, advocacy
          and social and economic empowerment
        </h4>
      </div>
    </div>
  );
}
