import Container from "@/app/Components/Container";
import MyPage from "@/app/Components/MyPage";
import React from "react";
import Title from "@/app/Components/Title";
import Image from "next/image";
import Link from "next/link";
import StreamNetwork from "@/app/Components/StreamNetwork";

export default async function Page({ params }) {
  const { slug } = await params;

  return (
    <MyPage>
      <Container>
        {slug == "flourish-toolbox" ? (
          <div>
            <Title>FLOURISH Toolbox</Title>

            <p className="mt-10">
              A Toolbox for Girls and Young Women Leaders on the Frontlines of
              Gender Justice in Health
            </p>

            <Image
              src={"/flourish.webp"}
              width={400}
              height={500}
              alt="flourish-toolbox"
              className="w-full object-contain mt-10"
            />

            <p className="mt-10">
              This toolbox, FLOURISH , is a collection of programming, advocacy,
              leadership, and mentorship resources and information that inform
              the collective action of emerging girls and young women leaders
              pursuing gender justice in health.
              <br />
              <br />
              It can be used to design, implement, expand, and strengthen
              programmes and activities of girls and young women and helps
              enable practical, meaningful, and impactful advocacy and
              leadership work across a wide variety of settings. FLOURISH has
              been written and inspired by young women leaders all over the
              world, with leadership from partners including Positive Young
              Women Voices (PYWV), the Global Network of Young People Living
              with HIV (Y+ Global), and the Africa Youth and Adolescent Network
              (AfriYAN).
              <br />
              <br />
              In supporting the 2030 Agenda for Sustainable Development, this
              toolbox is part of an important effort to find innovative
              solutions in various forms and ways of thinking towards empowering
              girls and young women and promoting real and sustainable change.
              In addition to helping build and support their capacities and
              skills, it also aims to raise awareness about the need for
              substantial investments in community-led organizations, groups,
              and networks of girls and young women in all their diversities.
              All local and global development partners should recognize and
              respond to the fact that such investments are essential for real
              change in all aspects of gender justice.
              <br />
              <br />
              At the heart of this toolbox is the belief that the substantive
              leadership of girls and young women must be encouraged at all
              levels if we are to achieve gender justice locally, nationally,
              and globally. Making significant progress toward this goal
              requires increasing and supporting their opportunities to shape
              policies and practices related to the health and rights of
              themselves, their peers, and communities – including by holding
              governments, multilateral agencies, policy makers, programme
              managers, and other decision-makers to account. This type and
              scope of direct engagement is essential to ensure that gender
              equality commitments are translated into sustained and meaningful
              change in areas such as HIV prevention and treatment, human
              rights, and sexual and reproductive health.
            </p>
            <br />
            <br />

            <Link
              href={"/flourish.pdf"}
              target="_blank"
              className="text-blue-600 underline"
            >
              Click here to read the toolbox
            </Link>
          </div>
        ) : slug == "pywv-2022-2026-strategic-plan" ? (
          <div>
            <Title> PYWV 2022 – 2026 Strategic Plan</Title>

            <Image
              src={"/strategy.webp"}
              width={400}
              height={500}
              alt="strategy.webp"
              className="w-full object-contain mt-10"
            />

            <p className="mt-10">
              As Positive Young Women Voices marks five years since it was
              formally registered , we are delighted to be sharing our vision
              for the next five years with the world.
            </p>
            <br />
            <br />
            <p className="font-bold">Our 2022-2026 strategic plan seeks to :</p>
            <ul>
              <li>
                . Promote uptake of exual and reproductive health services for
                AGYW in all their diversities as measured by increased access to
                quality healthcare services.
              </li>
              <li>
                . Promote the rights of AGYW in all their diversities through
                capacity building initiatives and stakeholder engagement.
              </li>
              <li>
                . Equip AGYW with financial and entrepreneurship knowledge for
                improved livelihoods through investment in viable and
                sustainable economic opportunities for self-sufficiency.{" "}
              </li>
              <li>
                . Strengthen PYWV’s profile and reputation to attract and
                sustain strategic partners through effective communication and
                visibility.
              </li>
              <li>
                . Enhance PYWV’s effectiveness and efficiency to deliver on its
                mission through strengthening the internal systems and
                structures.
              </li>
            </ul>

            <p className="my-10">
              We appreciate all our partners, current and to come for walking
              with us as we bring change for our girls and young women in our
              diversities.
            </p>

            <Link
              href={"/plan.pdf"}
              target="_blank"
              className="text-blue-600 underline"
            >
              Click here to read our strategic plan
            </Link>
          </div>
        ) : slug == "the-stream-network" ? (
          <StreamNetwork />
        ) : slug == "how-to-activism-guidelines" ? (
          <div>
            <Title>How to activism guidelines</Title>

            <p className="mt-10">
              During the 16 days of activism against gender based violence,
              Positive Young Women Voices with support from Global Network of
              People Living with HIV - GNP+ held a two days workshop to think of
              what activism means to the team.
              <br />
              <br />
              Based on lived experiences and lessons learnt from implementing
              the 'It Ends With Us' Project, the team was able to come up with
              guidelines. They focus on what is important to consider when doing
              activism to prevent and end violence against women and girls.
              <br />
              <br />
              PYWV envisions the guidelines being useful to young advocates who
              would like to make an impact in ending violence against women and
              girls and gives practical steps of what to do from our key lessons
              learnt.
            </p>
            <br />
            <br />
            <Link
              href={"/activismGuidelines.pdf"}
              target="_blank"
              className="text-blue-600 underline"
            >
              Click here to read our guidelines
            </Link>
          </div>
        ) : (
          <div>
            <Title>
              Carving the Path for Transformative LGBTIQA+ Programming in Kenya
            </Title>

            <p className="mt-10">
              The current times and climate in our country and other parts of
              the sub-Saharan region have proved to be uncertain, unsafe and
              daunting for the queer community. Now more than ever, it is
              paramount to rally with the great work that we have seen over the
              years and candidly leave no one behind. At PYWV, we uphold the
              belief that no one should be left behind if we are to attain the
              95:95:95 targets in the Global AIDS Strategy.
              <br />
              <br />
              PYWV embarked on the journey of collecting stories from our
              partners working towards inclusive and transformative LGBTIQA+
              programming. We undertook a research project with the objective of
              generating comprehensive insights on best practices for
              programming tailored for the queer community. Our ultimate goal
              was to compile these insights into a valuable resource that not
              only enhances our own initiatives, but can also be shared with
              other organizations working or planning to work in this field.
              <br />
              <br />
              Highlighting these success stories is important to remind
              ourselves and those who are in this field that it all matters.
              Every one of us matters.
            </p>
            <br />
            <br />
            <Link
              href={"/transformative-lgbtqia.pdf"}
              target="_blank"
              className="text-blue-600 underline"
            >
              Click here to read more
            </Link>
          </div>
        )}
      </Container>
    </MyPage>
  );
}
