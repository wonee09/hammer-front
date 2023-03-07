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
import { axiosLogin } from "@api/users";

import { userState } from "@recoil/atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();
  const [user, onChange] = useInput({
    email: "",
    password: "",
  });

  const [responseUser, setResponseUser] = useRecoilState(userState);

  const login = async () => {
    const userObj = {
      email: user.email,
      password: user.password,
    };
    axiosLogin(userObj)
      .then((res) => {
        alert("로그인 성공");
        console.log("res => ", res.data.data);

        setResponseUser(res.data.data);
        navigate("/search");
      })
      .catch((err) => {
        alert("로그인 오류가 발생하였습니다. 고객센터로 연락주세요.");
      });
  };

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
