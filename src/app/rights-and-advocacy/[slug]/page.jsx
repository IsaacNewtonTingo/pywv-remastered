import Container from "@/app/Components/Container";
import MyPage from "@/app/Components/MyPage";
import Title from "@/app/Components/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Page({ params }) {
  const { slug } = await params;
  return (
    <MyPage>
      <Container>
        {slug ==
        "prevention-and-elimination-of-violence-against-women-and-girls" ? (
          <div>
            <Title>
              Prevention and Elimination of Violence Against Women and Girls
            </Title>
            <Image
              src={"/prevViolence.jpg"}
              width={400}
              height={500}
              alt="Menstrual health and mentorship"
              className="w-full object-contain mt-10"
            />

            <p className="mt-10">
              We live in a society where women and girls are not safe anywhere
              and if we are to stand in solidarity, we have to pledge to free
              women and girls from the shackles of violence. Under this program,
              we have embarked on engaging like-minded grassroot organizations
              in TOT trainings on GBV prevention and response which includes
              proper documentation of reports and ethical handling of survivors
              even as they seek access to justice. The trainings not only help
              to enhance GBV prevention and response at the community level but
              also present an opportunity for all organizations present to
              exchange knowledge and consolidate advocacy efforts.
              <br />
              <br />
              In efforts of preventing and ending violence against women and
              girls, we use a gender transformative intervention , involving
              young men and understanding the role they play as influencers and
              allies. We enhance victim/survivor centered response to violence
              against women and girls by creating linkages with local
              authorities as well as referrals to the organizations and shelters
              responding to gender based violence .
              <br />
              <br />
              We trend on social media with the #ItEndsWithUs to start
              conversations, and urge the society to believe the survivors, we
              empower and stand against violence against women and girls.
            </p>
          </div>
        ) : slug == "gender-rights-promotion" ? (
          <div>
            <Title>Gender Rights Promotion</Title>
            <Image
              src={"/genderRights.jpg"}
              width={400}
              height={500}
              alt="Menstrual health and mentorship"
              className="w-full object-contain mt-10"
            />

            <p className="mt-10">
              The LBQ aspect of our programming is keen on promoting access to
              inclusive sexual and reproductive health services by persons who
              identify as Lesbian, Bisexual and Queer. We engage health care
              providers and community health promoters (CHPs) on a quarterly
              basis and sensitize them on the need for services that are
              tailored to meet the needs of LBQ Womxn. During these engagements
              we also introduce them to the concepts of SOGIE (Sexual
              Orientation, Gender Identity and Expression) and Intersectionality
              as these greatly impact the quality of care they provide. We also
              carry out VCAT (Value Clarification and Attitude Transformation)
              exercises as a way of holding space for them unpack personal
              biases and reflect on these biases while at the same time allowing
              us to assess the changes in attitudes and beliefs after every
              engagement.
            </p>
          </div>
        ) : slug == "we-lead-project" ? (
          <div>
            <Title>We lead project</Title>
            <Image
              src={"/welead.jpg"}
              width={400}
              height={500}
              alt="we-lead-project"
              className="w-full object-contain mt-10"
            />

            <p className="mt-10">
              We live in a society where women and girls are not safe anywhere
              and if we are to stand in solidarity, we have to pledge to free
              women and girls from the shackles of violence. Under this program,
              we have embarked on engaging like-minded grassroot organizations
              in TOT trainings on GBV prevention and response which includes
              proper documentation of reports and ethical handling of survivors
              even as they seek access to justice. The trainings not only help
              to enhance GBV prevention and response at the community level but
              also present an opportunity for all organizations present to
              exchange knowledge and consolidate advocacy efforts.
              <br />
              <br />
              In efforts of preventing and ending violence against women and
              girls, we use a gender transformative intervention , involving
              young men and understanding the role they play as influencers and
              allies. We enhance victim/survivor centered response to violence
              against women and girls by creating linkages with local
              authorities as well as referrals to the organizations and shelters
              responding to gender based violence .
              <br />
              <br />
              We trend on social media with the #ItEndsWithUs to start
              conversations, and urge the society to believe the survivors, we
              empower and stand against violence against women and girls.
            </p>
          </div>
        ) : slug == "community-engagement" ? (
          <div>
            <Title>Community Engagement</Title>
            <Image
              src={"/communityEngagement.jpg"}
              width={400}
              height={500}
              alt="communityEngagement"
              className="w-full object-contain mt-10"
            />

            <p className="mt-10">
              We believe our community has an intimate understanding of their
              own needs, strengths, and challenges, that they are experts by
              lived experiences and their insights are invaluable for designing
              interventions that will help to mitigate violence against women
              and girls. We therefore hold intergenerational community dialogues
              in all the five phases of Dandora and facilitate discussions on
              conflict, violence and peaceful means of solving conflicts before
              they escalate into violent situations.
            </p>
          </div>
        ) : (
          <div>
            <Title>Digital Media Advocacy</Title>
            <p className="mt-10">
              We hold monthly conversations on our social media platforms aimed
              at creating awarenmness about Sexual and Reproductive Health
              issues that affect women and girls in all their diversities.These
              conversations offer a platform for advocacy,knowledge sharing and
              also facilitate a safe space where people are able to share their
              experiences and ask questions without the fear of being judged.We
              are currently implementing a project dubbed #Voice4Impact which is
              a social media series with 10 episodes. We recognize that women’s
              rights advocates and human rights defenders rarely get the
              recognition and support that they deserve. It is to this regard
              that the aim of the project is to give women’s rights advocates
              and human rights defenders a platform to share their work,their
              advocacy journeys,the challenges they face and most importantly it
              gives us a chance to celebrate the amazing work they are doing to
              create change in their communities.
              <br />
              <br />
              Additionally,we use our social media platforms to amplify the work
              we are doing in our community . This is done by sharing our
              activities and plans. We also share articles on our website that
              have been written by our team members.
            </p>
          </div>
        )}
      </Container>
    </MyPage>
  );
}
