import PurpleButtonWithIcon from "@elem/button/PurpleButtonWithIcon";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import styled from "styled-components";

const Body = () => {
  return (
    <StyledContainer>
      <PurpleButtonWithIcon icon={<SendIcon fontSize="large" />}>
        인증 메일 보내기
      </PurpleButtonWithIcon>
    </StyledContainer>
  );
};

export default Body;

const StyledContainer = styled.div`
  margin: 0px 25px;
`;
