import React from "react";
import MyPage from "../Components/MyPage";
import Container from "../Components/Container";
import Link from "next/link";
import Title from "../Components/Title";

export default function Page() {
  return (
    <MyPage>
      <Container>
        <Title>Scholarships</Title>
        <p className="mt-10">
          The Timiza Ndoto Zake scholarship Fund was inspired by a girl in our
          mentorship program who came to our office requesting to be supported
          with school fees. She was in form four and feared she was going to
          miss out on her K.C.S.E examination. Through her moving story, we
          reached out to Adopt A Girl’s Month Initiative supporters requesting
          donations to see that she stays in school. We managed to clear her
          school fee balance as well as pay for her education until she
          completed her K.C.S.E examination and graduated from high school.
          <br />
          <br />
          One of our girls had dropped out of school while in form one due to
          lack of school fees and through sheer luck,we received a donation by
          one of our supporters to sponsor a girl to school. This has given her
          the opportunity to achieve her dreams of learning with the aspiration
          of becoming an Air Hostess. She is now enrolled in form one. We now
          have a number of girls and parents coming forward requesting for
          school fees support.
          <br />
          <br />
          Times are hard for everyone, especially for parents with children in
          high schools, and it is PYWV’s optimism that we will in future be able
          to sponsor more than one girl to school and even build a school that
          could see our girls attain the best quality education that is
          affordable.
          <br />
          <br />
          <strong>
            We welcome your generous contributions towards our vision
          </strong>
          <br />
          <br />
          <Link
            className="font-bold text-blue-700 text-[30px] underline"
            href={"https://www.changa.co.ke/fundraiser/55348"}
            target="_blank"
          >
            Donate
          </Link>
        </p>
      </Container>
    </MyPage>
  );
}
