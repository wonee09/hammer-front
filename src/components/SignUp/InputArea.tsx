import React from "react";
// 3rd parties
import MailIcon from "@mui/icons-material/Mail";
import HttpsIcon from "@mui/icons-material/Https";
// custom elements
import InputWithIcon from "@elem/input/InputWithIcon";

type PropsType = {
  input: any;
  onChange: any;
};

const InputArea = ({ input, onChange }: PropsType) => {
  return (
    <>
      <InputWithIcon
        placeholder="이메일"
        type="text"
        name="email"
        value={input.email}
        onChange={onChange}
      >
        <MailIcon />
      </InputWithIcon>
      <InputWithIcon
        placeholder="비밀번호(6자 이상)"
        type="password"
        name="password"
        value={input.password}
        onChange={onChange}
      >
        <HttpsIcon />
      </InputWithIcon>
      <InputWithIcon
        placeholder="비밀번호 확인"
        type="password"
        name="checkedPassword"
        value={input.checkedPassword}
        onChange={onChange}
      >
        <HttpsIcon />
      </InputWithIcon>
    </>
  );
};

export default InputArea;
