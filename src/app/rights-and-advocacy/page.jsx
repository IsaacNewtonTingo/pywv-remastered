import React from "react";
import MyPage from "../Components/MyPage";
import Title from "../Components/Title";
import ListCard from "../Components/ListCard";

export default function Page() {
  const data = [
    {
      title: "Prevention and Elimination of Violence Against Women and Girls",
      image: "/violence.png",
      preview:
        "We live in a society where women and girls are not safe anywhere and if we are to stand in solidarity, we have to pledge to free women and girls from the shackles of violence",
      description: ``,
      slug: "prevention-and-elimination-of-violence-against-women-and-girls",
    },
    {
      title: "Gender Rights Promotion",
      image: "/adopt.png",
      preview:
        "The LBQ aspect of our programming is keen on promoting access to inclusive sexual and reproductive health services by persons who identify as Lesbian, Bisexual and Queer",
      description: ``,
      slug: "gender-rights-promotion",
    },
    {
      title: "We Lead Project",
      image: "/we-lead.webp",
      preview:
        "We are implementing the We Lead program in partnership with like-minded civil society organizations working to build advocacy capacities of young women rightsholder groups; these are groups of young women whose sexual reproductive",
      description: ``,
      slug: "we-lead-project",
    },
    {
      title: "Community Engagement",
      image: "/community-engagement.png",
      preview:
        "We believe our community has an intimate understanding of their own needs, strengths, and challenges, that they are experts by lived experiences and their insights are invaluable",
      description: ``,
      slug: "community-engagement",
    },
    {
      title: "Digital Media Advocacy",
      image: "/media.png",
      preview:
        "We hold monthly conversations on our social media platforms aimed at creating awarenmness about Sexual and Reproductive Health issues that affect women and girls in all their diversities",
      description: ``,
      slug: "digital-media-advocacy",
    },
  ];
  return (
    <MyPage padding_x="lg:px-20" className={""}>
      <Title>Rights and Advocacy</Title>
      <div className="grid grid-cols-1 lg:grid-cols-5 mt-10 gap-6">
        {data.map((item) => (
          <ListCard
            key={item.title}
            item={item}
            folder={"rights-and-advocacy"}
          />
        ))}
      </div>
    </MyPage>
  );
}
