import axios from "axios";

/**
 *
 * @param userObj
 */
const axiosLogin = async (userObj: any) => {
  await axios.post(`${process.env.REACT_APP_AUTH_API_URL}/login`, userObj, {
    withCredentials: true,
  });
};

const axiosSignUp = async (userInfo: any) => {
  await axios.post("http://localhost:3018/api/users/", userInfo);
};

export { axiosLogin, axiosSignUp };
