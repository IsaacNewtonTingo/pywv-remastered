import React from "react";
import MyPage from "../Components/MyPage";
import Container from "../Components/Container";
import StreamNetwork from "../Components/StreamNetwork";

export default function Page() {
  return (
    <MyPage>
      <Container>
        <StreamNetwork />
      </Container>
    </MyPage>
  );
}
