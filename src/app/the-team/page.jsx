"use client";
import React, { useState } from "react";
import MyPage from "../Components/MyPage";
import Image from "next/image";
import Link from "next/link";
import TeamCard from "../Components/Team/TeamCard";

export default function TheTeam() {
  const [read_more, set_read_more] = useState(false);
  const team = [
    {
      name: "Wanjiku Njenga Lucy",
      title: "Executive Director",
      slug: "wanjiku-njenga-lucy",
      image: "/lucy-pywv.jpg",
      bio: "Wanjiku Njenga Lucy is a dynamic young leader who prides herself in creating an enabling environment for other young leaders to thrive. She has worked in the HIV responses for more than ten years with experience in establishing feminist movements as well as agitating for gender equality from the grassroots level to global level. Wanjiku is the Founding Coordinator of Sauti Skika, the first network of adolescents living with HIV in Kenya and the Founder and Executive Director of Positive Young Women Voices, a grassroots community-based organization that works to empower adolescent girls and young women living with or affected by HIV. She serves as the member of the ICASO Board of Directors; Board Member in the Country Coordinating Mechanism to the Global Fund and a former African Delegate to the UNAIDS Programme Coordinating Board. Wanjiku has authored Hope Made A Way - a memoir of her journey of triumph against adversities and inequalities. She is also an emerging writer for Nam AidsMap in the UK harnessing her scientific writing skills.",
      linkedIn: "https://www.linkedin.com/in/lucy-wanjiku-njenga-8470a16a",
    },
    {
      name: "Lydia Odipo",
      title: "Programs & Admin Coordinator",
      slug: "lydia-odipo",
      image: "/lydia-pywv.jpg",
      bio: "Lydia is a dependable programs administrative coordinator, leadership skills trainer, M&E officer, and SRHR advocate at Positive Young Women Voices. She holds a diploma in Human Resource Management and is pursuing a Bachelor's in Business Management. She’s a GBV survivor who uses her story to encourage other survivors to speak up. Lydia is committed to ending violence by raising a generation that values and respects women!",
      linkedIn: "https://www.linkedin.com/in/lydia-odipo-778584240",
    },
    {
      name: "Anne Mugo",
      title: "Project officer",
      slug: "anne-mugo",
      image: "/anne-pywv.jpg",
      bio: "Anne is an intersectional feminist who uses her skills to lead and advocate for the rights of women and girls, driven by the belief that our freedoms are interconnected and dependent on one another. Anne divides her time at Positive Young Women Voices between leadership, programs, communication, engagement, and advocacy duties. She is a writer who enjoys reading and fostering new relationships.",
      linkedIn: "https://www.linkedin.com/in/anne-mugo-659172112",
    },
    {
      name: "Beryl Wafula",
      title: "Socio-Economic Empowerment Officer",
      slug: "beryl-wafula",
      image: "/beryl-pywv.jpg",
      bio: "Beryl is a community volunteer passionate about change in the Dandora community having adolescent girls and young women at the forefront in advocating for their sexual rights. Beryl volunteers at Positive Young Women Voices as the socio-economic empowerment officer where she conducts sessions on financial literacy training for young women.",
      linkedIn: "https://www.linkedin.com/in/anne-mugo-659172112",
    },
    {
      name: "Consolata Akoth",
      title: "Communications department (Graphic designer)",
      slug: "consolata-akoth",
      image: "/consolata-pywv.jpg",
      bio: "Consolata is a graphic & web designer with a diploma in information technology. Consolata uses her skills and experience in graphic design to create informational materials for PYWV. Consolata is also an SRHR champion, who is passionate about advocating for the sexual and reproductive health and rights of adolescent girls and young women in all their diversities. Consolata also enjoys adventuring in new skills involving entrepreneurship.",
      linkedIn: "https://www.linkedin.com/in/consolatakothawuor/",
    },
    {
      name: "Cynthia Katanu",
      title: "Finance Officer",
      slug: "cynthia-katanu",
      image: "/katanu-pywv.jpg",
      bio: "Cynthia Katanu is currently the Finance Officer at Positive Young Women voices and is tasked with coordinating and providing Finance, budget, and administrative support involving the recording and interpretation of financial and budgetary information.",
      linkedIn: "https://www.linkedin.com/in/cynthia-katanu-2a77b8241",
    },
    {
      name: "Pili Mwita",
      title: "Research and Reporting Officer",
      slug: "pili-mwita",
      image: "/pili.jpg",
      bio: "Pili Mwita is a dedicated Communication's, Research, and Reporting officer. A Political Scientist by training, Pili is passionate about policy advocacy, particularly for inclusive policies that empower marginalized communities. She is particularly passionate about advancing women's leadership and promoting their active involvement in shaping decisions that affect their lives.",
      linkedIn: "",
    },
    {
      name: "Wanjiru Mbugua",
      title: "Resource Mobilization Officer",
      slug: "wanjiru-mbugua",
      image: "/wanjiru-mbugua-pywv.jpg",
      bio: "Wanjiru Mbugua is the Resource Mobilization lead at Positive Young Women Voices. Wanjiru is a policy expert and a gender & development practitioner, passionate about social justice. Wanjiru draws great fulfillment in working to advance the rights of young women and girls, specifically in promoting their agency. At PYWV Wanjiru is responsible for identifying and screening for suitability, funding opportunities, including calls for grant proposals. She takes the lead in proposal writing and coordinating with other organizations for joint proposal submission.",
      linkedIn: "",
    },
    {
      name: "Winnie Opana",
      title: "Monitoring and Evaluation Officer",
      slug: "winnie-opana",
      image: "/winnie-opana-pywv.jpg",
      bio: "Winnie is a Gender Activist, Sexual Reproductive Health Advocate, and mentor who is loud on the empowerment of Adolescent Girls and Young Women in their diversity, At Positive Young Women Voices Winnie works as the M&E officer.",
      linkedIn: "",
    },
    {
      name: "Aurelia Origi",
      title: "SRHR and Advocacy Officer",
      slug: "aurelia-origi",
      image: "/aurelia-origi-pywv.jpg",
      bio: "Aurelia Origi is a Political Scientist and a firm believer in women and girls taking up space and stepping into their power. At Positive Young Women Voices, she uses her knowledge and expertise to design and implement programs aimed at advancing the rights and freedoms of Adolescent Girls and Young Women in their diversity. Aurelia also plans and coordinates Mentorship, LBQ, PEVAWG, and Community Dialogue activities which are all under the SRHR and Advocacy Program.",
      linkedIn: "",
    },
  ];

  const advisory = [
    {
      name: "Marylize Biubwa",
      title: "Advisory board Chair",
      slug: "marylize-biubwa",
      image: "/marylizz-pywv.jpg",
      bio: `Marylize Biubwa is a 30 year old black queer intersectional feminist and activist. Her activism is on social justice with a deliberate gender bias. Her feminism, as indicated above is intersectional in nature to allow for championing for the rights of all humans. Her activism and feminism is inspired by life experiences and day to day events that make life. As a rape survivor, her motivation to activism and feminism is to see a world where women are free to express and explore their sexuality and femininity without being sexually objectified, for women to have a voice and choice over their bodies(bodily autonomy), and for consent to be a bare minimum when it comes to female interactions with males. Her ideal world is a world where a level ground is maintained for all genders, sexual orientations and identities to ever exist under the sun. As a queer lesbian womxn, other than seeing homosexuality decriminalized in Kenya, her activism and feminism is to see a world where human beings can live out their lives fully without the worry of being ostracized and abused because of their queerness. To see a world that embraces and respects diversity as it should be. Her work is, aside from working with partners, allys and different CSOs, mainly on social media which provides a suitable crowd to Propel the agenda of acquiring and obtaining information. To demystify myths about women and their sexuality and myths around persons of the LGBTIQGNC+ community. Platforms she often uses are Facebook (Biubwa Marylize), Twitter (@Queerly_So), IG (marylize_biubwa) and YouTube as (Marylize Biubwa) . In this age and time, she solidly believes cordiality is the secret power that social media gives everyone a chance at communication. And if we can communicate then why not share information, learn and become better humans?
            Contacts:
            candylize@gmail.com
            +254718294276.`,
      linkedIn: "",
    },
    {
      name: "Ritah Anindo Obonyo",
      title: "Advisory board member",
      slug: "ritah-anindo-obonyo",
      image: "/ritah-obonyo-pywv.jpg",
      bio: `Ritah Anindo Obonyo is a counselling psychologist and a sexual reproductive health and rights programmer. She has passion in sexual reproductive health, education, mental health and gender issues. She is among the selected fellows for the 2022 Climate and Health Public Engagement Leadership program funded by Dalberg, an accredited play therapist with Association of Play Therapy Kenya, a Young African Leader Initiative Fellow (YALI RLCEA), and a former Youth Advisory Council member for the Nairobi County Government. Ritah has led and initiated innovative and dynamic initiatives including Community Voices Network, 'Sauti Yangu' night vigil and community screening, 'The Shadow Pandemic' online series, Amuzi movie and support group and counselling programs in Korogocho. Ritah's most important values are transparency, accountability and integrity. She envisions a world where both men and women will have equal access to power, healthcare and educational opportunities.`,
      linkedIn: "",
    },
    {
      name: "Gladwell Ng’ang’a",
      title: "Advisory board member",
      slug: "gladwell-nganga",
      image: "/gladwell-pywv.jpg",
      bio: `Gladwell Ng’ang’a, in her final year at The University of Nairobi, Parklands Campus, is currently pursuing a Bachelor of Laws (LLB) degree. She is dedicated to leveraging her expertise in Sexual Reproductive Health Rights and advocating for the rights of young women and adolescents. With extensive leadership experience, she excels in creating, promoting, and delivering training solutions that align with organizational goals, fostering an engaging learning environment. Recently, Gladwell volunteered with Positive Young Women Voices, where she mentored young girls and supported the Pad Initiative for school-going girls. Prior to this, she served in various capacities, including at Girl Effect, as a youth creator where she designed and implemented successful programs in management development, team building, diversity, and communication, among other topics, to meet organizational objectives. Gladwell's key strengths encompass leadership, communication, facilitation, and influencing, particularly through social media platforms. Her noteworthy achievements include founding a university club focused on Mental Health and collaborating with the Assistant Dean to guide students. She has also been instrumental in raising awareness about contraceptives in schools, preventing early pregnancies and STIs, and addressing self-esteem issues through the RADA app, co-founded with the United Nations and The University of Nairobi. Additionally, Gladwell is currently engaged in research and thesis writing on Sexual Reproductive Health and Rights, Human Rights, Gender-Based Violence, and their connection to social media content and publications. Her collaboration with Healing Hearts CBO delves into digital space issues related to sexual and reproductive health rights. She excels in conducting thorough research and summarizing findings concisely, aiming to increase awareness and collaborate with youth to improve society.`,
      linkedIn: "",
    },
    {
      name: "Marion Odwar",
      title: "Advisory board member",
      slug: "marion-odwar",
      image: "/marion-pywv.jpg",
      bio: `Marion Odwar is 23 years old and the lastborn in a family of 6 children. She worked as a primary school teacher in the year 2019 and later on Joined Mishkan School of Fine Arts and did her certificate of Computer which she completed in December 2020. She managed to get a volunteership a as a peer Mentor in the year 2021 in Dreams Girls Program which is a NonGovernmental Organization based in Dandora working towards reducing new HIV infections among Adolescent Girls and Young Women (AGYW). Marion has worked towards ensuring that all the Young girls can protect themselves from getting HIV. She is also affiliated with Positive Young Women Voices which is a CBO based in Dandora focusing on matters of SRHR and Gender Based Violence across diversities of LGBTQ, PLHIV & the PWDs. Through the organization, Marion has learned and gained a lot especially when it comes to handling different diversities without making them feel bad in whichever way. She’s now empowered and bold to stand and air the voice of a girl child who still feels unfit for saying or doing what is right to be said and done. Most importantly, She is an SRHR Champion, a Cheerleader and a bridge to girls Empowerment.`,
      linkedIn: "",
    },
    {
      name: "Lucy Muthoni",
      title: "Advisory board member",
      slug: "lucy-muthoni",
      image: "/lucy-muthoni-pywv.jpg",
      bio: `Born and raised in the bustling city of Nairobi, Lucy Muthoni entered this world as the firstborn among her six siblings. From a young age, she embraced the role of a caring and protective sister, setting a shining example for her siblings to follow. Growing up in a tight-knit family taught her the value of unity and perseverance, shaping her into the compassionate individual she is today.
            Despite facing early challenges, Lucy found solace and joy in two of her greatest passions: traveling and the arts. Exploring new cultures and immersing herself in diverse artistic expressions became her way of connecting with the world around her. Through her travels, she discovered the beauty of human connection and the transformative power of creativity, fueling her spirit with a sense of wonder and curiosity. A skilled problem solver by nature, Lucy thrived in overcoming obstacles and finding innovative solutions to complex challenges. Her sharp intellect and unwavering determination earned her a reputation as a reliable and resourceful individual, always ready to lend a helping hand to those in need. Whether it was navigating through life's uncertainties or tackling intricate problems, Lucy approached every situation with grace and resilience.
            Not only is Lucy known for her problem-solving abilities and warm sociable nature, but she has also been a group leader and motivator throughout her education. Her leadership skills have guided her peers towards success, while her motivational spirit has inspired others to reach their full potential. In every role she takes on, Lucy exudes a sense of empowerment and encouragement, creating a positive impact on those around her. In a world that often feels chaotic and unpredictable, Lucy's unwavering optimism and genuine compassion shine like a beacon of hope, inspiring others to embrace life's challenges with courage and grace.`,
      linkedIn: "",
    },
  ];

  const strategic_advisors = [
    {
      name: "Mark Mutuma",
      title: "Strategic Advisor",
      slug: "mark-mutuma",
      image: "/mark-mutuma-pywv.jpg",
      bio: `Mark Mutuma Nyaga is a seasoned development practitioner with over seven years of experience in the sector. His expertise spans project planning, management, business development, and resource mobilisation for international development in regional and multinational corporations. His work cuts across various disciplines such as Agriculture, Livelihoods & Resilience, Sexual & Reproductive Health, Community Development, Market Systems, Education, and Adolescents & Young Persons.
            Mark has collaborated with numerous NGOs and multinational organizations, including the World Bank,British Council, Hivos, Palladium, USAID, Bill & Melinda Gates Foundation, Children Investment Fund Foundation (CIFF), Mastercard Foundation, and UN Agencies. This experience has equipped him to work effectively with diverse teams across countries and continents. In addition to his development work, Mark is a Strategic Adviser, Youth Leader, and Mentor. He co-founded a non-profit organization and has four years of professional experience in business development at Genesis Analytics. His career also includes roles at global brands such as Kantar Public and Nope International Institute.
            Mark’s international exposure is extensive, having coordinated programs, business operations, and business development across Africa, MENA and South East Asia. He has been instrumental in supporting organizations’ business development and systems to ensure consistent and timely delivery of core services to clients.
            Mark holds a Bachelor of Arts in Development Studies from Maseno University. He is a co- founder of the Arise African Child Foundation and serves as a Strategic Advisor to Positive
            Young Women Voices. His innovative approach to program and project development aims to address some of the most critical challenges in the developing world.`,
      linkedIn: "",
    },
  ];
  return (
    <MyPage padding_x="lg:px-20" className={""}>
      <div className="w-full">
        <h1 className="text-center font-black text-[40px] mb-10">
          Meet the team
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {team.map((item) => (
            <TeamCard
              key={item.name}
              item={item}
              read_more={read_more}
              set_read_more={set_read_more}
            />
          ))}
        </div>

        <h1 className="text-center font-black text-[40px] my-10">
          Advisory Team
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {advisory.map((item) => (
            <TeamCard
              key={item.name}
              item={item}
              read_more={read_more}
              set_read_more={set_read_more}
            />
          ))}
        </div>

        <h1 className="text-center font-black text-[40px] my-10">
          Strategic Advisors
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {strategic_advisors.map((item) => (
            <TeamCard
              key={item.name}
              item={item}
              read_more={read_more}
              set_read_more={set_read_more}
            />
          ))}
        </div>
      </div>
    </MyPage>
  );
}
