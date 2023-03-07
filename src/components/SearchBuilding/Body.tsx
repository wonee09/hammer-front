import React, { useState } from "react";
import DaumPostCode from "react-daum-postcode";
import HeightBox from "@elem/HeightBox";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { axiosAddBuilding } from "@api/building";
import { userState } from "@recoil/atom";
import { useRecoilState } from "recoil";

const Body = () => {
  const navigate = useNavigate();

  const [user, setUser] = useRecoilState(userState);
  console.log("userState", user);

  const handleComplete = async (data: any) => {
    // 의미 있는 데이터로 좀 바꾸긴 해야할 것 같다.
    // 시군구 정보, 법정동 정보 등 저장해야 해당 지역별로 통계자로 등 뽑기 편할 듯
    const addressObj = {
      zoneNo: data.zonecode,
      totalRoadAddress: data.roadAddress,
      roadName: data.roadname,
      buildingName: data.buildingName,
      mainBuildingNo: data.buildingCode,
      subBuildingNo: data.bcode,
      undergroundYn: "N",
      xLoc: "",
      yLoc: "",
    };

    const config = {
      headers: {
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_RESTAPI}`,
      },
    }; // 헤더
    const url =
      "https://dapi.kakao.com/v2/local/search/address.json?query=" +
      addressObj.totalRoadAddress; // REST API url에 data.address값 전송

    try {
      const response = await axios.get(url, config);
      const xLoc = response.data.documents[0].x;
      const yLoc = response.data.documents[0].y;

      addressObj.xLoc = xLoc;
      addressObj.yLoc = yLoc;

      axiosAddBuilding(addressObj)
        .then((res) => {
          console.log("res", res);
          navigate("/posts", {
            state: {
              address: res.data.data,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledBody>
      <DaumPostCode
        style={{
          border: "0.1px solid #d1d1d1",
        }}
        onComplete={handleComplete}
      />
      <HeightBox height={"50px"} />
      <StyledP>주소를 검색해 새로운 동네를 탐색해보세요.</StyledP>
    </StyledBody>
  );
};

export default Body;

const StyledBody = styled.div`
  padding: 10px;
  /* border: 1px solid grey; */
`;

const StyledP = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #191919;
`;
