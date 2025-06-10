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
        {slug == "menstrual-health-and-mentorship" ? (
          <div>
            <Title>Menstrual health and mentorship</Title>
            <p className="my-10">
              The aim of the mentorship program is{" "}
              <strong>nurturing a community of bold female leaders</strong> ,
              with the voice of change both at an individual and societal level.
              The mentorship department works closely with adolescent girls of
              ages 9 to 19 years in 4 community high schools and out of school .
              The mentors in the department facilitate sessions on sexual
              reproductive health and rights including information access,
              adolescence and peer pressure, mental health and well being,
              menstrual hygiene, healthy communication and leadership skills .
              Boys are also engaged in the sessions in the schools we partner
              with as allies in ending period stigma.
            </p>
            <Image
              src={"/mens2.jpg"}
              width={400}
              height={500}
              alt="Menstrual health and mentorship"
              className="w-full object-contain"
            />

            <p className="mt-10">
              The mentorship sessions run on a quarterly basis, with six
              sessions every month. We mark and celebrate the girls on occasions
              that call for it like International day of the girl child and
              Menstrual hygiene day marked globally. <br />
              <br />
              <strong>
                To support our sanitary towels provision to end period poverty,
                please donate{" "}
                <Link
                  target="_blank"
                  className="text-blue-600"
                  href={"https://www.changa.co.ke/fundraiser/14948"}
                >
                  here
                </Link>
              </strong>
            </p>
          </div>
        ) : slug == "hiv-prevention-and-care" ? (
          <div>
            <Title>HIV prevention and care</Title>
            <p className="my-10">
              <strong>
                Includes our support group for young women living with HIV and
                awareness creation on HIV and TB
              </strong>
              <br />
              <br />
              Ending the AIDS Epidemic will depend on greater efforts to reduce
              new HIV Infections, prevent AIDS-related deaths, create awareness
              on U=U (undetectable equals untransmittable) and bridge the gap
              between civil societies, healthcare providers and adolescent girls
              and young women living with HIV, through provider-consumer
              education support programmes.
              <br />
              <br />
              PYWV hence acts as a gap between health care workers and a group
              of young women identified as MY TRIBE. They conduct a support
              forum on a monthly basis to discuss challenges they face and
              brainstorm on solutions that foster achievement of the global
              targets of reducing the impacts of HIV.
            </p>
          </div>
        ) : (
          <div>
            <Title>Mental Health</Title>
            <Image
              src={"/mental-health-pywv.jpg"}
              width={400}
              height={500}
              alt="Mental Health"
              className="w-full object-contain my-10"
            />
            <p>
              A healthy mind and body equals a wealthy person. At PYWV, we
              believe when our mental health is taken care of, our physical,
              social, intellectual and psychological states exist in peace and
              harmony and by extension, so do our social connections with
              others.
              <br />
              <br />
              In our day to day work, we deal with cases of sexual and gender
              based violence that often sprouts up all kinds of emotions. To
              monitor and shelter our bodies from potential problems and pain,
              we keep tabs on our mental health and are able to recognize when
              we need support and attention.
              <br />
              <br />
              We are deliberate about this,not only by creating a mutually
              beneficial supportive culture but by also establishing referral
              systems for psycho-social support for both our team members and
              sexual and gender based violence survivors in the community we
              serve.
              <br />
              <br />
              Our team members have access to counseling services provided by an
              in-house therapist, whom they see at will. They are thus able to
              effectively deliver on their work to impact those we work with and
              for. For our community and target groups, we conduct mental health
              awareness and facilitate counseling and therapy services for
              individuals and groups in all their diversities.
            </p>
          </div>
        )}
      </Container>
    </MyPage>
  );
}
