import React from "react";
import Header from "@components/EmailAuth/Header";
import HeightBox from "@elem/HeightBox";
import Body from "@components/EmailAuth/Body";

const SendAuthMail = () => {
  return (
    <>
      <Header />
      <HeightBox height={"97px"} />
      <Body />
    </>
  );
};

export default SendAuthMail;
