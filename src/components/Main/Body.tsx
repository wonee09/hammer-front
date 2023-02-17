import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { colors } from "@shared/colors";
import { getBuildings } from "@api/building";
import { useMutation, useQuery } from "react-query";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import CloseIcon from "@mui/icons-material/Close";

const Body = () => {
  const { isLoading, isError, data, error } = useQuery(
    "buildings",
    getBuildings
  );

  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 37.5666, lng: 126.9977 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: true,
  });

  const mutation = useMutation(async () => {
    
  }, {
    onSuccess: () => {
      console.log('...')
    }
  })

  // 마커 선택 시 관리하기 위한 state정의
  const [selectedMakerId, setSelectedMarkerId] = useState("");

  useEffect(() => {
    console.log(`selectedMakerId가 변경되었습니다. ${selectedMakerId}`);
  }, [selectedMakerId]);

  if (isLoading) {
    return <h1>로딩중입니다...!</h1>;
  }

  if (isError || error) {
    return <h1>오류가 발생하였습니다...!</h1>;
  }

  return (
    <div style={{ position: "relative" }}>
      <Map
        center={state.center}
        isPanto={state.isPanto}
        style={{ width: "100%", height: "96.5vh" }}
        level={3}
      >
        {data.map((item: any) => {
          const adjustedLocation = {
            lat: item.lat + 0.0005,
            lng: item.lng - 0.0015,
          };
          return (
            <>
              <MapMarker // 마커를 생성합니다
                key={item.id}
                position={{
                  // 마커가 표시될 위치입니다
                  lat: item.lat,
                  lng: item.lng,
                }}
                image={{
                  src: require("@assets/marker.png"), // 마커이미지의 주소입니다
                  size: {
                    width: 43,
                    height: 35,
                  }, // 마커이미지의 크기입니다
                  options: {
                    offset: {
                      x: 30,
                      y: 10,
                    }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                  },
                }}
                onClick={() => {
                  setState({
                    center: {
                      lat: item.lat,
                      lng: item.lng,
                    },
                    isPanto: true,
                  });
                  setSelectedMarkerId(item.id);
                }}
              />
              <CustomOverlayMap
                position={{
                  lat: adjustedLocation.lat,
                  lng: adjustedLocation.lng,
                }}
                zIndex={1}
              >
                {item.id === selectedMakerId ? (
                  <>
                    <CloseIcon
                      style={{
                        position: "absolute",
                        right: "1px",
                        top: "1px",
                        color: "gray",
                      }}
                      onClick={() => setSelectedMarkerId("")}
                    />
                    <StyledCustomOverlay>{item.address}</StyledCustomOverlay>
                  </>
                ) : (
                  ""
                )}
              </CustomOverlayMap>
            </>
          );
        })}
      </Map>

      {/* 우측 하단 새 글 버튼 */}
      <StyledNewPostButton fontColor={`${colors.get("mainPurple")}`}>
        <AddLocationAltIcon
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </StyledNewPostButton>
    </div>
  );
};

export default Body;

const StyledNewPostButton = styled.div<{ fontColor: string }>`
  position: absolute;
  right: 35px;
  bottom: 50px;
  z-index: 2;
  width: 35px;
  height: 35px;
  background-color: white;
  cursor: pointer;
  font-size: x-large;
  border-radius: 100%;
  padding: 8px;
  color: ${(props) => props.fontColor};
`;

const StyledCustomOverlay = styled.div`
  background-color: white;
  padding: 17px 12px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
`;
