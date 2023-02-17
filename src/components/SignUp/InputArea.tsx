import React from "react";
// 3rd parties
import MailIcon from "@mui/icons-material/Mail";
import HttpsIcon from "@mui/icons-material/Https";
// custom elements
import InputWithIcon from "@elem/input/InputWithIcon";

const InputArea = () => {
  return (
    <>
      <InputWithIcon placeholder="이메일" type="text">
        <MailIcon />
      </InputWithIcon>
      <InputWithIcon placeholder="비밀번호(6자 이상)" type="password">
        <HttpsIcon />
      </InputWithIcon>
      <InputWithIcon placeholder="비밀번호 확인" type="password">
        <HttpsIcon />
      </InputWithIcon>
    </>
  );
};

export default InputArea;
