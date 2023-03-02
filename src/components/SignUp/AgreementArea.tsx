import React, { useState } from "react";
// 3rd parties
import styled from "styled-components";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import HeightBox from "@elem/HeightBox";
import AgreementButton from "@components/SignUp/AgreementButton";
import AllCheckBox from "@elem/input/AllCheckBox";

type PropsType = {
  isCheckedAll: boolean;
  setIsCheckedAll: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckedTermsOfUse: boolean;
  setIsCheckedTermsOfUse: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckedTermsOfPrivacy: boolean;
  setIsCheckedTermsOfPrivacy: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckedTermsOfLocation: boolean;
  setIsCheckedTermsOfLocation: React.Dispatch<React.SetStateAction<boolean>>;
};

const AgreementArea = ({
  isCheckedAll,
  setIsCheckedAll,
  isCheckedTermsOfUse,
  setIsCheckedTermsOfUse,
  isCheckedTermsOfPrivacy,
  setIsCheckedTermsOfPrivacy,
  isCheckedTermsOfLocation,
  setIsCheckedTermsOfLocation,
}: PropsType) => {
  // 모든 체크박스를 true로 변경
  const setTrueToAll = () => {
    setIsCheckedTermsOfUse(true);
    setIsCheckedTermsOfPrivacy(true);
    setIsCheckedTermsOfLocation(true);
  };

  // 모든 체크박스를 false로 변경
  const setFalseToAll = () => {
    setIsCheckedTermsOfUse(false);
    setIsCheckedTermsOfPrivacy(false);
    setIsCheckedTermsOfLocation(false);
  };

  return (
    <>
      <StyledAgreementHeader>
        <StyledHeaderText>약관동의</StyledHeaderText>
        <AllCheckBox
          isChecked={isCheckedAll}
          setIsCheckedAll={setIsCheckedAll}
          setTrueToAll={setTrueToAll}
          setFalseToAll={setFalseToAll}
        >
          전체선택
        </AllCheckBox>
      </StyledAgreementHeader>
      <StyledAgreementBody>
        <AgreementButton
          value={isCheckedTermsOfUse}
          onChange={setIsCheckedTermsOfUse}
        >
          이용약관
        </AgreementButton>
        <HeightBox height={"18px"} />
        <AgreementButton
          value={isCheckedTermsOfPrivacy}
          onChange={setIsCheckedTermsOfPrivacy}
        >
          개인정보처리
        </AgreementButton>
        <HeightBox height={"18px"} />
        <AgreementButton
          value={isCheckedTermsOfLocation}
          onChange={setIsCheckedTermsOfLocation}
        >
          위치기반서비스
        </AgreementButton>
      </StyledAgreementBody>
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
