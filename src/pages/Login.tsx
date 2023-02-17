import React from "react";
// components
import Header from "@components/Login/Header";
import Body from "@components/Login/Body";
// custom elements
import HeightBox from "@elem/HeightBox";

const Login = () => {
  return (
    <>
      <Header />
      <HeightBox height={"80px"} />
      <Body />
    </>
  );
};

export default Login;
