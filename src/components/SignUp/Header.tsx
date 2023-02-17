import React from "react";
// 3rd parties
import styled from "styled-components";
// custom elements
import WhiteBackArrowButton from "@elem/button/WhiteBackArrowButton";

const Header = () => {
  return (
    <StyledHeader>
      <StyledSubHeaderBox>
        <WhiteBackArrowButton />
        <StyledTitle>우리동네 신문고</StyledTitle>
      </StyledSubHeaderBox>
    </StyledHeader>
  );
};

export default Header;

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
