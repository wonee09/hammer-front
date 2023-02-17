import React from "react";
// 3rd parties
import styled from "styled-components";
import MailIcon from "@mui/icons-material/Mail";
import HttpsIcon from "@mui/icons-material/Https";
// custom elements
import PlainGrayLinkText from "@elem/text/PlainGrayLinkText";
import PlainGrayText from "@elem/text/PlainGrayText";
import PurpleButton from "@elem/button/PurpleButton";
import InputWithIcon from "@elem/input/InputWithIcon";
import HeightBox from "@elem/HeightBox";

const Body = () => {
  return (
    <StyledBody>
      <InputWithIcon placeholder="이메일" type="text">
        <MailIcon />
      </InputWithIcon>
      <InputWithIcon placeholder="비밀번호" type="password">
        <HttpsIcon />
      </InputWithIcon>
      <HeightBox height={"39px"} />
      <PurpleButton>로그인</PurpleButton>
      <HeightBox height={"9px"} />
      <StyledAdditionalMenuBox>
        <PlainGrayLinkText>비밀번호 찾기</PlainGrayLinkText>
        <PlainGrayText>&nbsp;&nbsp;|&nbsp;&nbsp;</PlainGrayText>
        <PlainGrayLinkText>회원가입</PlainGrayLinkText>
      </StyledAdditionalMenuBox>
    </StyledBody>
  );
};

export default Body;

const StyledBody = styled.div`
  padding-left: 25px;
  padding-right: 25px;
`;

const StyledAdditionalMenuBox = styled.div`
  display: flex;
  justify-content: center;
`;
