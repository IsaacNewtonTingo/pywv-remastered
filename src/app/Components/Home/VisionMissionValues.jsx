import Image from "next/image";
import React from "react";

export default function VisionMissionValues() {
  const core_values = [
    {
      name: "Respect",
      description:
        "We hold each and every one within the PYWV spaces with utmost dignity and regard for who they are, their opinions, perspectives and diversities",
      icon: "/respect.png",
    },
    {
      name: "Integrity",
      description:
        "We uphold honesty, professionalism and trust in all our endeavours and are committed to ensure that our choices and decisions are to the best interest of PYWV and stakeholders.",
      icon: "/integrity.png",
    },
    {
      name: "Inclusivity",
      description:
        "We are committed to treat everyone with fairness and equality regardless of their gender, sexuality, religion, social class and beliefs.",
      icon: "/inclusivity.png",
    },
    {
      name: "Humanity",
      description:
        "We treat everyone we interact with with dignity, kindness and embrace their value simply because they are human.",
      icon: "/humanity.png",
    },
    {
      name: "Transaparency",
      description:
        "We are accountable to our stakeholders by ensuring openness in our communication, being good stewards of resources entrusted to us and being responsible for our actions.",
      icon: "/transparency.webp",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-40 px-40">
      <div className="flex flex-col items-center w-[50%]">
        <Image
          src={"/vision.png"}
          width={250}
          height={100}
          className=""
          alt="Vision"
        />
        <h4 className="text-center text-[20px] ">
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
          alt="Mission"
        />
        <h4 className="text-center text-[20px] ">
          <strong className="text-orange-500 mt-10">Mentor and advocate</strong>{" "}
          for young women and adolescent girls in all their diversities to
          advance their rights through access to inclusive healthcare, advocacy
          and social and economic empowerment
        </h4>
      </div>

      <div className="flex flex-col items-center mt-20">
        <Image
          src={"/core-value.png"}
          width={250}
          height={100}
          className=""
          alt="Core values"
        />

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mt-20 ">
          {core_values.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center gap-6"
            >
              <Image
                src={item.icon}
                width={60}
                height={60}
                alt={item.name}
                className=""
              />
              <h5 className="text-orange-500 text-[20px] font-bold">
                {item.name}
              </h5>
              <p className="text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
