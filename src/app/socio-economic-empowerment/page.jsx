import React from "react";
import MyPage from "../Components/MyPage";
import Container from "../Components/Container";
import Title from "../Components/Title";
import Image from "next/image";

export default function Page() {
  return (
    <MyPage>
      <Container>
        <div>
          <Title>Socio-economic empowerment</Title>
          <Image
            src={"/makeup.jpg"}
            width={400}
            height={500}
            alt="Socio-economic empowerment"
            className="w-full object-contain mt-10"
          />

          <p className="italic text-gray-400 mt-10 text-sm">
            Everlyne represents economic empowerment through entrepreneurship as
            she is generating income and developing business skills as she is
            achieving financial independence for herself
          </p>

          <p className="mt-10">
            Gender equality is critical for all countries' and societies'
            prosperity and long-term growth, ensuring that no one is left
            behind. Gender equality and women's empowerment are highlighted in
            Sustainable Development Goal (SDG) 5 of the United Nations 2030
            Agenda for Sustainable Development, which aims to achieve gender
            equality and empower all women and girls by 2030.
            <br />
            <br />
            We have committed ourselves to the objective of women's economic
            empowerment in collaboration with other organizations. We recognize
            that empowering women economically is a win-win situation that
            benefits not only women but society as a whole. It helps women
            attain their rights and well-being while also lowering household
            poverty, enhancing economic development and production, and
            improving efficiency.
          </p>
          <Image
            src={"/socioEconomic.jpg"}
            width={400}
            height={500}
            alt="Socio-economic empowerment"
            className="w-full object-contain mt-10"
          />
          <p className="italic text-gray-400 mt-10 text-sm mb-10">
            Everlyne represents economic empowerment through entrepreneurship as
            she is generating income and developing business skills as she is
            achieving financial independence for herself
          </p>

          <p>
            We want to help young women under the age of 35 in the community to
            develop the skills they need to succeed and advance economically.
            Women require market-ready skills and resources, as well as fair and
            equitable access to economic institutions. To be in a position of
            power and authority. Women must be able to make and act on
            decisions, as well as control resources and earnings, in order to
            benefit from economic activity.
            <br />
            <br />
            We have been able to offer seed grants to young women in businesses
            with initial funding to help them launch and grow their business
            ideas. These grants are designed to support entrepreneurs in the
            early stages by offering financial assistance to cover startup
            costs, product development, marketing, or other business needs. Seed
            grants aim to empower women to pursue their entrepreneurial goals,
            build sustainable businesses, and contribute to economic growth
          </p>
        </div>
      </Container>
    </MyPage>
  );
}
