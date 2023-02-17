import React from "react";
import styled from "styled-components";

type PropsType = {
  children: string;
  icon: any;
};

const PurpleButtonWithIcon = ({ children, icon }: PropsType) => {
  return (
    <StyledBasicButton>
      {icon}&nbsp;&nbsp;&nbsp;
      {children}
    </StyledBasicButton>
  );
};

export default PurpleButtonWithIcon;

const StyledBasicButton = styled.button`
  background-color: #6a3cb0;
  border-radius: 10px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;

  color: #ffffff;

  width: 100%;

  border: 0;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  height: 40px;

  cursor: pointer;
`;
