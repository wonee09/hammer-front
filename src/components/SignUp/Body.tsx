import React from "react";
// 3rd parties
import styled from "styled-components";
// custom elements
import HeightBox from "@elem/HeightBox";
// components
import InputArea from "@components/SignUp/InputArea";
import AgreementArea from "@components/SignUp/AgreementArea";

const Body = () => {
  return (
    <StyledBody>
      <InputArea />
      <HeightBox height={"50px"} />
      <AgreementArea />
    </StyledBody>
  );
};

export default Body;

const StyledBody = styled.div`
  padding-left: 25px;
  padding-right: 25px;
`;
