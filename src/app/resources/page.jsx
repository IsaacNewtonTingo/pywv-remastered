import React from "react";
import MyPage from "../Components/MyPage";
import Title from "../Components/Title";
import ListCard from "../Components/ListCard";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const resources = [
    {
      title: "Flourish Toolbox",
      image: "/resource1.png",
      preview:
        "This toolbox, FLOURISH, is a collection of programming, advocacy, leadership, and mentorship resources and information that inform the collective action of emerging girls and young women leaders pursuing gender justice in health. It can be used to design, implement",
      description: ``,
      slug: "flourish-toolbox",
    },
    {
      title: "PYWV 2022 - 2026 Strategic Plan",
      image: "/resource2.png",
      preview:
        "As Positive Young Women Voices marks five years since it was formally registered, we are delighted to be sharing our vision for the next five years with the world. Our 2022-2026 strategic plan seeks to: Promote uptake of sexual and reproductive health services for AGYW in all their diversities as",
      description: ``,
      slug: "pywv-2022-2026-strategic-plan",
    },
    {
      title: "The STREAM Network",
      image: "/new-plan.png",
      preview:
        "The STREAM Network is a movement of women living with HIV, working together with men to advance our sexual and reproductive health and rights (SRHR). We have linked with accredited trainers in the holistic, evidence-based Stepping",
      description: ``,
      slug: "the-stream-network",
    },
    {
      title: "How to activism guidelines",
      image: "/activism.png",
      preview:
        "During the 16 days of activism against gender based violence, Positive Young Women Voices with support from Global Network of People Living with HIV - GNP+ held a two days workshop to think of what activism means to the team",
      description: ``,
      slug: "how-to-activism-guidelines",
    },
    {
      title:
        "Carving the Path for Transformative LGBTIQA+ Programming in Kenya",
      image: "/pywv-lgbtqia.png",
      preview:
        "During the 16 days of activism against gender based violence, Positive Young Women Voices with support from Global Network of People Living with HIV - GNP+ held a two days workshop to think of what activism means to the team",
      description: ``,
      slug: "carving-the-path-for-transformative-lgbtqia+-rogramming-in-kenya",
    },
  ];
  return (
    <MyPage padding_x="lg:px-20">
      <Title>Resources</Title>
      <h2>
        Have a read of our collections of tools and resources developed for and
        with adolescent girls and young women.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-6">
        {resources.map((item) => (
          <ListCard key={item.title} item={item} folder={"resources"} />
        ))}

        <div className="rounded-lg bg-gray-100 p-6 text-center flex flex-col items-center  ">
          <Image
            src={"/pywv-reports.png"}
            width={100}
            height={100}
            alt={"Annual Report"}
            className="w-auto h-auto"
          />

          <h3 className="font-bold text-[20px] my-10">Annual Reports</h3>
          <h3>Have a look at our</h3>
          <ul>
            <li>
              <Link
                className="text-blue-600 underline"
                target="_blank"
                href={"/pywv-2023-report.pdf"}
              >
                2023 Report
              </Link>
            </li>
            <li>
              <Link
                className="text-blue-600 underline"
                target="_blank"
                href={"/pywv-2024-report.pdf"}
              >
                2024 Report
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </MyPage>
  );
}
