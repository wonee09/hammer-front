// 3rd parties
import styled from "styled-components";
// custom elements
import HeightBox from "@elem/HeightBox";
// components
import InputArea from "@components/SignUp/InputArea";
import AgreementArea from "@components/SignUp/AgreementArea";
import { useInput } from "@hooks/useInput";
import { useEffect, useState } from "react";
import PurpleButton from "@elem/button/PurpleButton";
import { axiosSignUp } from "@api/users";
import axios from "axios";

const Body = () => {
  const [input, onChange] = useInput({
    email: "",
    password: "",
    checkedPassword: "",
  });

  // checkbox states
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isCheckedTermsOfUse, setIsCheckedTermsOfUse] = useState(false);
  const [isCheckedTermsOfPrivacy, setIsCheckedTermsOfPrivacy] = useState(false);
  const [isCheckedTermsOfLocation, setIsCheckedTermsOfLocation] =
    useState(false);

  useEffect(() => {
    /** 1. 체크박스가 모두 선택되면 전체선택을 무조건 체크함 */
    if (
      isCheckedTermsOfUse === true &&
      isCheckedTermsOfPrivacy === true &&
      isCheckedTermsOfLocation === true &&
      isCheckedAll === false
    ) {
      setIsCheckedAll(true);
    }

    /** 2. 체크박스가 하나라도 선택되지 않은게 있으면 전체선택을 무조건 해제함 */
    if (
      isCheckedTermsOfUse === false ||
      isCheckedTermsOfPrivacy === false ||
      isCheckedTermsOfLocation === false
    ) {
      setIsCheckedAll(false);
    }
  }, [
    isCheckedTermsOfUse,
    isCheckedTermsOfPrivacy,
    isCheckedTermsOfLocation,
    isCheckedAll,
  ]);

  // 이메일 인증하기 버튼 선택
  const signUp = async () => {
    if (validateInput()) {
      // 검증 정상
      // 백엔드 통신

      const userInfo = {
        email: input.email,
        password: input.password,
        nickName: "testNickName",
      };

      try {
        // const response = await axios.post(
        //   "http://localhost:3018/api/users/",
        //   userInfo
        // );
        axiosSignUp(userInfo);

        // console.log("통신 성공!", response);
      } catch (error) {
        console.log("오류 발생 !", error);
      }
    } else {
      // 오류 발생
      alert("검증 도중 오류가 발생하였습니다.");
    }
  };

  // 입력값 검증
  const validateInput = () => {
    if (verifyEmail(input.email)) {
      return false;
    }

    return true;
  };

  const verifyEmail = (email: string) => {
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if (exptext.test(email) == false) {
      alert("이메일형식이 올바르지 않습니다.");

      return false;
    }
  };

  return (
    <StyledBody>
      <InputArea input={input} onChange={onChange} />
      <HeightBox height={"50px"} />
      <AgreementArea
        isCheckedAll={isCheckedAll}
        setIsCheckedAll={setIsCheckedAll}
        isCheckedTermsOfUse={isCheckedTermsOfUse}
        setIsCheckedTermsOfUse={setIsCheckedTermsOfUse}
        isCheckedTermsOfPrivacy={isCheckedTermsOfPrivacy}
        setIsCheckedTermsOfPrivacy={setIsCheckedTermsOfPrivacy}
        isCheckedTermsOfLocation={isCheckedTermsOfLocation}
        setIsCheckedTermsOfLocation={setIsCheckedTermsOfLocation}
      />
      <HeightBox height={"25px"} />
      <PurpleButton onClick={signUp}>이메일 인증하기</PurpleButton>
    </StyledBody>
  );
};

export default Body;

const StyledBody = styled.div`
  padding-left: 25px;
  padding-right: 25px;
`;
