import React from "react";
// 3rd parties
import styled from "styled-components";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import HeightBox from "@elem/HeightBox";
import AgreementButton from "@components/SignUp/AgreementButton";
import PurpleButton from "@elem/button/PurpleButton";
import CheckBox from "@elem/input/CheckBox";

const AgreementArea = () => {
  return (
    <>
      <StyledAgreementHeader>
        <StyledHeaderText>약관동의</StyledHeaderText>
        <CheckBox>전체동의</CheckBox>
      </StyledAgreementHeader>
      <StyledAgreementBody>
        <AgreementButton>이용약관</AgreementButton>
        <HeightBox height={"18px"} />
        <AgreementButton>개인정보처리</AgreementButton>
        <HeightBox height={"18px"} />
        <AgreementButton>이용약관</AgreementButton>
      </StyledAgreementBody>
      <HeightBox height={"25px"} />
      <PurpleButton>이메일 인증하기</PurpleButton>
    </>
  );
};

export default AgreementArea;

const StyledAgreementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeaderText = styled.span`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #767676;
`;

const StyledAgreementBody = styled.div`
  border: 1.5px solid #767676;
  padding: 17px 10px;
`;
