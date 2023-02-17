import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <StyledSubHeaderBox>
        <HomeIcon fontSize="large" style={iconStyle} />
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

const iconStyle = {
  color: "#fff",
  marginLeft: "25px",
  cursor: "pointer",
};
