import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { cookie } from "@utils/cookie";

const useAuth = (auth: any) => {
  const navigate = useNavigate();
  const token = cookie.get("accessToken"); //cookie에서 accessToken 가져오기

  const authUser = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_AUTH_API_URL}/user`, {
        headers: {
          // 브라우저 토큰을 뒤져서 로그인 정보가 존재하는지 확인
          authorization: `Bearer ${token}`,
        },
      });
    } catch (e: any) {
      // 서버 처리에 따라 달라질 수 있음!
      // 401 에러 : 인증 실패 오류
      // 처리 : 기존 존재하는 쿠키 상의 아이디와 access token 제거 후 login 페이지로 이동
      if (e.response.status === 401) {
        cookie.remove("id");
        cookie.remove("accessToken");
        window.alert("로그인이 필요합니다.");
        navigate("/login");
      }
    }
  };

  const notAccessHandler = () => {
    if (token) {
      window.alert("이미 로그인 했습니다.");
      navigate("/");
    }
  };

  // auth 또는 token이 변경된 경우 수행
  useEffect(() => {
    if (auth === "notAccess") notAccessHandler();
    else if (auth === "private") authUser();
    else throw new Error("private 또는 NotAccess를 입력해주세요.");
  }, [token]); //dependency array에 auth가 포함돼야 하는 이유는 모르겠음
  // }, [auth, token]);

  return { isLogin: Boolean(token) };
};

export default useAuth;
