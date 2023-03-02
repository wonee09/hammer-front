import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

type PropsType = {
  children: string;
  linkTo: string;
};

const PlainGrayLinkText = ({ children, linkTo }: PropsType) => {
  const navigator = useNavigate();
  return (
    <StyledPlainGrayLinkText
      onClick={() => {
        navigator(`/${linkTo}`);
      }}
    >
      {children}
    </StyledPlainGrayLinkText>
  );
};

export default PlainGrayLinkText;

const StyledPlainGrayLinkText = styled.span`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #767676;
  cursor: pointer;
`;
