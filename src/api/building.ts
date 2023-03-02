import axios from "axios";

// 전체 빌딩 정보 가져오기
const axiosGetBuildings = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/buildings`
  );
  return response.data;
};

// 빌딩 정보 입력
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
