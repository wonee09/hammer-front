import React from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MailIcon from "@mui/icons-material/Mail";
import HttpsIcon from "@mui/icons-material/Https";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import HeightBox from "@elem/HeightBox";

const Login = () => {
  return (
    <>
      <StyledHeader>
        <StyledSubHeaderBox>
          <ArrowBackIosNewIcon style={arrowStyle} />
          <StyledTitle>우리동네 신문고</StyledTitle>
        </StyledSubHeaderBox>
      </StyledHeader>
      <HeightBox height={"80px"} />
      <StyledBody>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <MailIcon />
            </InputAdornment>
          }
          fullWidth
          placeholder="이메일"
          style={{
            height: "55px",
            fontSize: "16px",
            paddingLeft: "15px",
          }}
        />
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <HttpsIcon />
            </InputAdornment>
          }
          fullWidth
          placeholder="비밀번호"
          style={{
            height: "55px",
            fontSize: "16px",
            paddingLeft: "15px",
          }}
          type="password"
        />
        <HeightBox height={"39px"} />
        <StyledBasicButton>로그인</StyledBasicButton>
        <HeightBox height={"9px"} />
        <StyledAdditionalMenuBox>
          <StyledPlainGrayLinkText>비밀번호 찾기</StyledPlainGrayLinkText>
          <StyledPlainGrayText>&nbsp;&nbsp;|&nbsp;&nbsp;</StyledPlainGrayText>
          <StyledPlainGrayLinkText>회원가입</StyledPlainGrayLinkText>
        </StyledAdditionalMenuBox>
      </StyledBody>
    </>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: flex-end;
  padding-bottom: 19px;
  background-color: #6a3cb0;
  width: 100%;
  height: 120px;

  // header 내부 폰트 정의
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
`;

const StyledBody = styled.div`
  padding-left: 25px;
  padding-right: 25px;
`;

const StyledSubHeaderBox = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTitle = styled.span`
  color: #fff;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

const arrowStyle = {
  color: "#fff",
  marginLeft: "25px",
  cursor: "pointer",
};

const StyledBasicButton = styled.button`
  background-color: #6a3cb0;
  border-radius: 10px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;

  color: #ffffff;

  width: 100%;

  border: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 141px;
  height: 40px;

  cursor: pointer;
`;

const StyledPlainGrayLinkText = styled.span`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #767676;
  cursor: pointer;
`;

const StyledPlainGrayText = styled.span`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #767676;
`;

const StyledAdditionalMenuBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default Login;
