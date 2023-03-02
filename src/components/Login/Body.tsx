import React, { useEffect } from "react";
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
import { useInput } from "@hooks/useInput";
import axios from "axios";

const Body = () => {
  const [user, onChange] = useInput({
    email: "",
    password: "",
  });

  const login = async () => {
    const userObj = {
      email: user.email,
      password: user.password,
    };
    try {
      const response = await axios.post(
        "http://localhost:3018/api/login",
        userObj,
        {
          withCredentials: true,
        }
      );
      console.log("통신 성공!", response);
    } catch (err) {
      console.log("오류 발생!", err);
    }
  };

  // useEffect(() => {
  //   console.log("user 변경", user);
  // }, [user]);

  return (
    <StyledBody>
      <InputWithIcon
        placeholder="이메일"
        type="text"
        name="email"
        value={user.email}
        onChange={onChange}
      >
        <MailIcon />
      </InputWithIcon>
      <InputWithIcon
        placeholder="비밀번호"
        type="password"
        name="password"
        value={user.password}
        onChange={onChange}
      >
        <HttpsIcon />
      </InputWithIcon>
      <HeightBox height={"39px"} />
      <PurpleButton
        onClick={() => {
          login();
        }}
      >
        로그인
      </PurpleButton>
      <HeightBox height={"9px"} />
      <StyledAdditionalMenuBox>
        <PlainGrayLinkText linkTo={"signUp"}>비밀번호 찾기</PlainGrayLinkText>
        <PlainGrayText>&nbsp;&nbsp;|&nbsp;&nbsp;</PlainGrayText>
        <PlainGrayLinkText linkTo={"signUp"}>회원가입</PlainGrayLinkText>
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
