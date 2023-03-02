import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import TopLogo from "@components/TopLogo";

// 로그인 했을 경우의 Layout
const Layout = ({ bgColor = "#fff" }: any) => {
  return (
    <>
      <TopLogo />
      <StLayout bgColor={bgColor}>
        <Outlet />
        {/* {children} */}
      </StLayout>
    </>
  );
};

export default Layout;

const StLayout = styled.div<{ bgColor: string }>`
  /* height: calc(100vh - 45px); */
  background-color: ${({ bgColor }) => bgColor};
  /* padding: 24px; */
`;
