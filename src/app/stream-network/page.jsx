import React from "react";
import MyPage from "../Components/MyPage";
import Container from "../Components/Container";
import Title from "../Components/Title";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

export default function Page() {
  const links = [
    {
      name: "Our background and purpose",
      navTo: "#our-background-and-purpose",
    },
    {
      name: "Our strategic plan",
      navTo: "#our-strategic-plan",
    },
    {
      name: "Our country pools",
      navTo: "#our-country-pools",
    },
    {
      name: "How to access stepping stones",
      navTo: "#how-to-access-stepping-stones",
    },
    {
      name: "Related documents and sites",
      navTo: "#related-documents-and-sites",
    },
  ];

  const countires = [
    {
      name: "Global",
      strategic_plan: "/global.pdf",
      case_study: "",
    },
    {
      name: "Argentina",
      strategic_plan: "/argentina.pdf",
      case_study: "",
    },
    {
      name: "Cameroon",
      strategic_plan: "/cameroon-strategic-plan.pdf",
      case_study: "/cameroon-case-study.pdf",
    },
    {
      name: "India",
      strategic_plan: "/india-strategic-plan.pdf",
      case_study: "/india-case-study.pdf",
    },
    {
      name: "Kenya",
      strategic_plan: "/kenya-strategic-plan.pdf",
      case_study: "#",
    },
    {
      name: "Uganda",
      strategic_plan: "/uganda.pdf",
      case_study: "",
      advocacy_brief: "/uganda-case-study.pdf",
    },
    {
      name: "Tanzania",
      strategic_plan: "/tanzania.pdf",
      case_study: "/tanzania-case-study.pdf",
    },
    {
      name: "Zimbabwe",
      strategic_plan: "/zimbabwe.pdf",
      case_study: "",
      advocacy_brief: "#",
    },
  ];
  return (
    <MyPage>
      <Container>
        <Title>STREAM Network</Title>

        <h2 className="my-10">
          Welcome to our STREAM Network. Please click on the relevant link below
          to read more
        </h2>

        <div className="flex gap-4">
          {links.map((item) => {
            return (
              <Link
                href={item.navTo}
                key={item.name}
                className="text-blue-700 underline"
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="w-full relative mt-10">
          <Image
            src={"/new-plan-lead-img.png"}
            width={200}
            height={200}
            className="w-full"
            alt="new-plan-lead-img.png"
            unoptimized
          />
        </div>

        <h2
          id="our-background-and-purpose"
          className="text-[30px] font-bold my-10"
        >
          Our background and purpose
        </h2>

        <p>
          The STREAM Network is a movement of women living with HIV, working
          together with men to advance our sexual and reproductive health and
          rights (SRHR). We have linked with accredited trainers in the
          holistic, evidence-based Stepping Stones gender-transformative social
          norms change programmes to achieve our purpose. The STREAM Network was
          formed out of a 4-day meeting held in Nairobi, Kenya, in 2022, hosted
          by Positive Young Women Voices and funded by UNAIDS. STREAM stands for
          Stepping Stones Trainers Engaging with Activist Movements.
          <br />
          <br />
          The workshop brought together women living with HIV who are all
          feminist women’s rights activists, from Argentina, Cameroon, India,
          Kenya, Tanzania, Uganda, UK/Ireland and Zimbabwe; as well as long-term
          Stepping Stones female and male practitioners from Kenya, Tanzania,
          Uganda and Zimbabwe. The workshop comprised of participants with an
          age-range stretching from our mid- twenties to our late seventies.
          Together we resolved to join our diverse experiences, knowledge,
          skills and passions together to create the STREAM Network and a
          five-year global strategic plan was developed.
          <br />
          <br />
          The Network seeks a common purpose - to uphold and maintain the SRHR
          of women and girls especially in all our communities in the context of
          HIV, irrespective of our HIV status. We all recognize that violence
          against women, and against children form a key part of children’s and
          women’s vulnerability both to acquiring HIV and to living with HIV,
          across the life span.
        </p>
        <br />
        <br />

        <h2 id="our-strategic-plan" className="text-[30px] font-bold mb-10">
          Our strategic plan
        </h2>

        <p>
          <strong>The STREAM Network Strategic Plan 2023 – 2027,</strong>{" "}
          created in our Nairobi workshop, highlights intergenerational
          solidarity and how it can be harnessed to end violence against
          adolescent girls and young women in the context of our SRHR. Within
          our communities, we all recognise also how the vicious cycle of VAW
          and VAC are both causes as well as consequences of HIV. These slow
          down, reduce - and often prevent - women's and children's realisation
          of their SRHR.
          <br />
          <Link
            href={"/stream-plan"}
            target="_blank"
            className="text-blue-600 underline"
          >
            Click here to read our strategic plan
          </Link>
        </p>

        <h2 id="our-country-pools" className="text-[30px] font-bold my-10">
          Our country pools
        </h2>
        <p>
          In the year 2023, Positive Young Women Voices – the STREAM host
          organization - with the support of UNAIDS, again virtually brought
          together the 7 countries to localize the global strategic plan into
          each member’s country’s context. The localization process would see to
          it that the countries within the network move towards coming up with
          their own respective national priorities drawn from the bigger
          strategic plan. This was to make it easier for them to bring on board
          other stakeholders in a position to support the outcomes of the plan,
          as well as create avenues for them to efficiently resource mobilize
          towards program implementation. The network members aimed to hold a
          series of online and physical in-country meetings, to determine what
          the localization process would look like for each of them.
          <br />
          <br />
          Through these meetings, they also identified consultants to bring on
          board to assist in the development of both the Strategic Plan and the
          Case Studies/ Advocacy Briefs. To continue pushing for the adoption or
          the continued implementation of Stepping Stones, the country networks
          sought to develop and share their advocacy briefs/ case studies with
          the key stakeholders/ partners they felt would be of assistance to
          them, as they strive to implement their in-country strategic plans.
        </p>

        <h3 className="font-bold mt-10">
          Click below to read from each country:
        </h3>

        <div className="mt-10">
          <Accordion collapseAll>
            {countires.map((item) => (
              <AccordionPanel key={item.name} className="bg-transparent">
                <AccordionTitle>{item.name}</AccordionTitle>
                <AccordionContent className="bg-white flex flex-col gap-4">
                  {item.strategic_plan && (
                    <Link
                      href={item.strategic_plan}
                      className="text-blue-600 underline"
                      target="_blank"
                    >
                      Strategic Plan
                    </Link>
                  )}
                  {item.case_study && (
                    <Link
                      href={item.case_study}
                      className="text-blue-600 underline"
                      target="_blank"
                    >
                      Case study
                    </Link>
                  )}
                  {item.advocacy_brief && (
                    <Link
                      href={item.advocacy_brief}
                      className="text-blue-600 underline"
                      target="_blank"
                    >
                      Advocacy plan
                    </Link>
                  )}
                </AccordionContent>
              </AccordionPanel>
            ))}
          </Accordion>
        </div>

        <p className="mt-10">
          In early 2024, the STREAM Network expanded to welcome two new
          countries and networks, who are already familiar with using adapted
          versions of Stepping Stones:
        </p>

        <ol className="mt-4">
          <li>
            . Malawi -{" "}
            <Link
              className="text-blue-600 underline"
              href={"https://vimeo.com/showcase/3879606"}
              target="_blank"
            >
              COWLHA
            </Link>
          </li>
          <li>
            . Timor Leste -{" "}
            <Link
              className="text-blue-600 underline"
              href={
                "https://asiafoundation.org/wp-content/uploads/2023/08/Timor-Leste_Nabilan-Program-Brochure_EN_TT.pdf"
              }
              target="_blank"
            >
              Estrela+
            </Link>
          </li>
        </ol>

        <h2
          id="how-to-access-stepping-stones"
          className="text-[30px] font-bold my-10"
        >
          How to access the Stepping Stones programme
        </h2>

        <p>
          To learn more about the <strong>Stepping Stones</strong> training
          programmes to overcome violence against women and against children and
          maintain and uphold their SRHR in the context of HIV, please visit the
          dedicated Stepping Stones website{" "}
          <Link
            href={"https://steppingstonesfeedback.org/"}
            target="_blank"
            className="text-blue-600 underline"
          >
            here
          </Link>
          . This site includes guidelines for adaptations of the programmes to
          suityour own context, as well as FAQs about the programmes.
          <br />
          <br />
          Your own copies of the two{" "}
          <strong>Stepping Stones training programmes</strong> can be bought{" "}
          <Link
            href={
              "https://practicalactionpublishing.com/search?keywords=stepping+stones&search_param=title"
            }
            target="_blank"
            className="text-blue-600 underline"
          >
            here
          </Link>
        </p>

        <h2
          id="related-documents-and-sites"
          className="text-[30px] font-bold my-10"
        >
          Related documents and sites
        </h2>
        <p>
          Below are some further documents and sites relevant to our STREAM
          programme
        </p>

        <ol className="flex  flex-col gap-2">
          <li>
            1. "We hear the thunder but we see no rain: Lessons learnt in
            efforts to promote community-led evidence-based initiatives to
            advance our{" "}
            <Link
              className="text-blue-600 underline"
              href={"https://vimeo.com/917620302?share=copy"}
            >
              SRHR
            </Link>
            ” by Bajenja EK and Njenga LW on behalf of the STREAM Network. Oral
            Presentation by Lucy Wanjiku of Positive Young Women Voices at the
            African Workshop on HIV and Women in Nairobi, Kenya, February 2024.
          </li>

          <li>
            2. Launch of the STREAM Network. Concluding Remarks by Lucy Wanjiku
            Njenga, Founding Director, PYWV. October 2022.
          </li>

          <li>
            3. Stepping Stones Newsletter for International Women’s Day{" "}
            <Link
              className="text-blue-600 underline"
              href={
                "https://steppingstonesfeedback.org/wp-content/uploads/2023/03/Stepping_Stones_International_Womens_Day_2023_for_website_redcd.pdf"
              }
            >
              2023.
            </Link>
          </li>

          <li>
            4. Some Stepping Stones films and presentations: a selection of
            presentations and films which show how Stepping Stones works
            holistically across the genders, generations and HIV status to
            support girls, women, boys and men in communities to work together
            to uphold their SRHR{" "}
            <Link
              className="text-blue-600 underline"
              href={"https://vimeo.com/showcase/11276020?share=copy"}
            >
              https://vimeo.com/showcase/11276020?share=copy
            </Link>{" "}
          </li>

          <li>
            5. The Stepping Stones website (https://steppingstonestorights.net).
            Our knowledge and understanding of how best to uphold our SRHR is
            constantly evolving and Stepping Stones trainers are constantly
            modifying their methods to ensure they are uptodate with the latest
            evidence-based advances. This is especially important since so much
            has changed in the world of HIV over the years. This Stepping Stones
            website contains Stepping Stones Adaptation Guidelines and
            Frequently Asked Questions about how to adapt the Stepping Stones
            programmes in a way which ensures that it is best suited to each new
            context, while remaining aligned to the structure and principles of
            the original programme and up to date with the latest scientific
            information. You can contact Stepping Stones accredited trainers in
            your own country / region through this site.
          </li>

          <li>
            6. UNAIDS ALIVHE{" "}
            <Link
              className="text-blue-600 underline"
              href={
                "https://www.unaids.org/en/resources/documents/2017/ALIVHE_Framework"
              }
            >
              Framework
            </Link>{" "}
            . This framework was designed to support those wishing to implement
            and evaluate responses to violence against women (and girls) and HIV
            in and with communities. In our STREAM Strategic Plan, we have
            adapted the ALIVHE landscape theory of change, as well as the ALIVHE
            values and the gender change matrix.
          </li>

          <li>
            “Enhancing Social Norms Change Programs: An invitation to rethink
            “Scaling Up” from a feminist{" "}
            <Link
              className="text-blue-600 underline"
              href={
                "https://salamandertrust.net/wp-content/uploads/2022/06/CUSP_FeministScalePaper-2.pdf"
              }
            >
              perspective
            </Link>
            . " The CUSP Collective. 2021. This thoughtpiece by a collective of
            originators of evidence-based gender-transformative social norms
            change programmes (including Stepping Stones), offers an
            alternative, ecological metaphor for scaling social norms change
            through women’s movements. Our STREAM Network strategy builds on
            this metaphor.
          </li>
        </ol>
      </Container>
    </MyPage>
  );
}
