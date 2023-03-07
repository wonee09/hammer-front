import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TopLogo = () => {
  const navigate = useNavigate();
  return (
    <StyledContainer
      onClick={() => {
        navigate("/");
      }}
      style={{
        cursor: "pointer",
      }}
    >
      우리동네 신문고
    </StyledContainer>
  );
};

export default TopLogo;

const StyledContainer = styled.div`
  background-color: #6a3cb0;
  color: #fff;
  padding: 7px;
  font-weight: 900;
  font-size: small;
`;
