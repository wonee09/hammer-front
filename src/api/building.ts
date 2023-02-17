import axios from "axios";

// 전체 빌딩 정보 가져오기
const getBuildings = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/buildings`
  );
  return response.data;
};

export { getBuildings };
