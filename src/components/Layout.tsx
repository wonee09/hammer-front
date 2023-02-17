import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "@components/Header";

// 로그인 했을 경우의 Layout
const Layout = ({ children, bgColor = "#fff" }: any) => {
  return (
    <>
      <Header />
      <StLayout bgColor={bgColor}>
        <Outlet />
        {children}
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
