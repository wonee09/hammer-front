import React from "react";
import styled from "styled-components";

type PropsType = {
  children: string;
};

const PlainGrayLinkText = ({ children }: PropsType) => {
  return <StyledPlainGrayLinkText>{children}</StyledPlainGrayLinkText>;
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
