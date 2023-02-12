import React from "react";
import useAuth from "@features/auth/hooks/useAuth";

const UserNotAccess = ({ children }: any) => {
  // login이 필요없는 페이지 컴포넌트
  const { isLogin } = useAuth("notAccess");

  // 이미 로그인 되어있는 경우 아무것도 안함

  if (isLogin) return null;

  // 로그인이 안되어있는 경우 요청한 페이지로 이동
  return <>{children}</>;
};

export default UserNotAccess;
