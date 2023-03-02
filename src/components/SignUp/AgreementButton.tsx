import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "styled-components";
import CheckBox from "@elem/input/CheckBox";

type PropsType = {
  children: string;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
};

const AgreementButton = ({ children, onChange, value }: PropsType) => {
  return (
    <StyledContainer>
      <StyledItemButton>
        {children}&nbsp;&nbsp;&nbsp;
        <ArrowForwardIosIcon />
      </StyledItemButton>
      <CheckBox value={value} onChange={onChange}>
        동의(필수)
      </CheckBox>
    </StyledContainer>
  );
};

export default AgreementButton;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledItemButton = styled.button`
  width: 193px;
  height: 40px;

  background: #6a3cb0;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;
`;
