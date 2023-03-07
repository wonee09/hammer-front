import axios from "axios";

/**
 * @author Jay
 * @description 전체 건물 정보 가져오기
 * @returns 빌딩목록
 */
const axiosGetBuildings = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_AUTH_API_URL}/buildings`
  );

  // 빌딩의 post가 존재하는 전체 building의 xLoc와 yLoc를 가지고 오믄 될 듯
  return response.data.data;
};

/**
 * @author Jay
 * @description 건물정보 입력
 * @param addressObj
 * @returns 빌딩목록
 */
const axiosAddBuilding = async (addressObj: any) => {
  const address = await axios.post(
    "http://localhost:3018/api/address",
    addressObj
  );

  return address;
};

export { axiosGetBuildings, axiosAddBuilding };
