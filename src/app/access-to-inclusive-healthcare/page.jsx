import React from "react";
import MyPage from "../Components/MyPage";
import Title from "../Components/Title";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

export default function Page() {
  const data = [
    {
      title: "Menstrual Health And Mentorship",
      image: "/darkPad.png",
      preview:
        "The aim of the mentorship is nurturing a community of bold female leaders, with the voice of change both at an individual and societal level. The mentorship department works closely with adolescent girls of ages",
      description: ``,
      slug: "menstrual-health-and-mentorship",
    },
    {
      title: "HIV Prevention and Care",
      image: "/hiv.png",
      preview:
        "Ending the AIDS Epidemic will depend on greater efforts to reduce new HIV Infections, prevent AIDS-related deaths, create awareness on U=U (undetectable equals untransmittable) and bridge the gap between civil societies",
      description: ``,
      slug: "hiv-prevention-and-care",
    },
    {
      title: "Mental health",
      image: "/mentalHealth.png",
      preview:
        "A healthy mind and body equals a wealthy person. At PYWV, we believe when our mental health is taken care of, our physical, social, intellectual and psychological states exist in peace and harmony and by extension, so do our",
      description: ``,
      slug: "mental-health",
    },
  ];
  return (
    <MyPage className={"lg:px-10"}>
      <Title>Access To Inclusive Healthcare</Title>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-6">
        {data.map((item) => (
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
              href={`/access-to-inclusive-healthcare/${item.slug}`}
              className={`border border-gray-700 text-orange-500 w-full h-[50px] mt-10 flex items-center justify-center hover:bg-black hover:rounded-lg hover:text-white`}
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </MyPage>
  );
}

// export async function getStaticPaths() {
//   const filePath = path.join(
//     process.cwd(),
//     "data",
//     "access-to-inclusive-healthcare.json"
//   );
//   const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

//   const paths = data.map((item) => ({
//     params: { slug: item.slug },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const filePath = path.join(
//     process.cwd(),
//     "data",
//     "access-to-inclusive-healthcare.json"
//   );
//   const team = JSON.parse(fs.readFileSync(filePath, "utf8"));

//   const person = team.find((p) => p.slug === params.slug);

//   return { props: { person } };
// }
