import React from "react";
// import useAuth from "@/features/auth/hooks/useAuth";
import useAuth from "@features/auth/hooks/useAuth";

const Private = ({ children }: any) => {
  // isLogin : 현재 로그인 상태인지 여부
  // Login 모듈 붙이면 활성화 할 것
  const { isLogin } = useAuth("private");
  // const isLogin = true;

  // login상태가 아닌 경우 아무것도 안함(페이지 이동 안함)
  if (!isLogin) return null;

  // login 상태라면 요청한 컴포넌트로 이동
  return <div>{children}</div>;
};

export default Private;
