import React from "react";
import styled from "styled-components";

const Header = () => {
  return <StyledContainer>우리동네 신문고</StyledContainer>;
};

export default Header;

const StyledContainer = styled.div`
  background-color: #6a3cb0;
  color: #fff;
  padding: 7px;
  font-weight: 900;
  font-size: small;
`;
