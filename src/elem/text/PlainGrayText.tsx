import React from "react";
import styled from "styled-components";

type PropsType = {
  children: string;
};

const PlainGrayText = ({ children }: PropsType) => {
  return <StyledPlainGrayText>{children}</StyledPlainGrayText>;
};

export default PlainGrayText;

const StyledPlainGrayText = styled.span`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #767676;
`;
