import React from "react";
// custom elements
import HeightBox from "@elem/HeightBox";
// components
import Header from "@components/SignUp/Header";
import Body from "@components/SignUp/Body";

const SignUp = () => {
  return (
    <>
      <Header />
      <HeightBox height={"80px"} />
      <Body />
    </>
  );
};

export default SignUp;
