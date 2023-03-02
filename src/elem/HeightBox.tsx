import React from "react";
import styled from "styled-components";

type PropsType = {
  height: string;
};

const HeightBox = ({ height }: PropsType) => {
  return <StHeightBox height={height} />;
};

export default HeightBox;

const StHeightBox = styled.div<{ height: string }>`
  height: ${(props) => props.height};
`;
