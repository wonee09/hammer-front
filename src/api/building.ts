import axios from "axios";

/**
 * @author Jay
 * @description 전체 건물 정보 가져오기
 * @returns 빌딩목록
 */
const axiosGetBuildings = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/buildings`
  );
  return response.data;
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
    addressObj,
    {
      withCredentials: true,
    }
  );

  return address;
};

export { axiosGetBuildings, axiosAddBuilding };
