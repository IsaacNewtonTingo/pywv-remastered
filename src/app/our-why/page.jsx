import React from "react";
import MyPage from "../Components/MyPage";
import Container from "../Components/Container";
import Image from "next/image";

export default function OurWhy() {
  return (
    <MyPage>
      <Container>
        <h1 className="font-bold text-[40px]">Our Why</h1>
        <Image
          src={"/our-why.jpg"}
          width={200}
          height={300}
          alt="our why"
          className="w-full mt-10"
          priority
          unoptimized
        />

        <p className="mt-10">
          The need for <strong>love</strong> is the strongest emotion in the
          world and <strong>Lucy Wanjiku Njenga</strong> knew this too well.
          She, however, found it in all the wrong places that she ended up
          becoming a teenage mother. This was when life had just started making
          sense having been lucky enough to finish her O level education, amidst
          all the challenges that came with getting a quality education in the
          informal settlements of <strong>Dandora, Nairobi</strong> . Seven
          months later after birth, her son succumbed to pneumonia, two weeks
          after Lucy had tested positive for HIV. It was all too much to bear,
          and it only got worse before it got better. Her partner became
          abusive, refusing her to work to get an income, belittling her and her
          ideas and resulted in physical violence. She thought she deserved this
          until she could no longer take it anymore. With all the scars one
          question that was constant was why this had happened to her <br />
          <br />
          She figured all she ever wanted was someone to stand in the gap for
          her, someone with more experience who would have helped her make
          better choices. As she did not have that person, she could be that
          person and help other girls not to go through what she went through
          and that is how <strong>
            Positive Young Women Voices (PYWV)
          </strong>{" "}
          was founded. This would be a safe space where a girl’s voice mattered.
          The founding members were friends, all raised in Dandora and
          identified with the challenges that girls and young women face in the
          community. They wanted to live in a community where adolescent girls
          and young women in their diversities lived to their full potential.
          They came together to support one girl going back to school through
          their own contributions. Unfortunately, she got pregnant at 15 years
          of age. It dawned on the friends that there was a missing link and
          being in school was not enough. There was a need for something more In
          2017, PYWV was registered as a Community-Based Organization (CBO) to
          respond to the challenges affecting adolescent girls and young women
          in the community. Our interventions include activities to address
          violence against women and girls that range from peer-to-peer
          mentorship, trainings for both young men and women, Lesbian, Bisexual
          and Queer (LBQ) women support forums and community outreaches . For
          adolescent girls we have the peer-to-peer mentorship, mentor and
          mentee program and Adopt a Girl a Month, a monthly mentorship
          initiative with provision of sanitary towels and life skills training.
          Adopt a Girl a Month was our flagship project started in 2017 through
          M-Changa , a crowdfunding platform. PYWV prides itself in the
          relationship existing with the community stakeholders, the Advisory
          Group (the Board), partners and committed volunteers who collaborate
          towards realization of the organization’s vision. The volunteers at
          PYWV and their supporters are all people who are tired of just
          speaking and have decided to use their skills, knowledge, and
          resources to make Dandora a better place for a girl and woman in all
          their diversities.
        </p>
      </Container>
    </MyPage>
  );
}
