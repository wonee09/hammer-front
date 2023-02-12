import React from "react";
import styled from "styled-components";

const HeightBox = ({ height }: any) => {
  return <StHeightBox height={height} />;
};

export default HeightBox;

const StHeightBox = styled.div<{ height: string }>`
  height: ${(props) => props.height};
`;
