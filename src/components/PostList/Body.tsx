import HeightBox from "@elem/HeightBox";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { axiosGetPosts } from "@api/posts";
import { useEffect } from "react";

const Body = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const address = location.state.address;

  const formatDate = (str: string) => {
    let result = str.substring(0, 20);

    return result;
  };

  if (!location.state) {
    alert("올바르지 않은 접근입니다. 주소검색 페이지로 이동할게요!");
    navigate("/search");
  }

  // useQuery를 이용하여 해당 location id의 post list를 읽어옴
  // 1. useQuery : 조회(select)
  // 2. useMutate : 수정, 삭제, 추가(CUD) -> invalidate + Query
  const { isLoading, isError, error, data, refetch } = useQuery(
    "postList",
    () => axiosGetPosts(address.id, searchValue)
  );

  useEffect(() => {
    refetch();
  }, [searchValue]);

  if (isLoading) {
    return (
      <>
        <div>로딩중입니다...!</div>
      </>
    );
  }

  if (isError) {
    return (
      <div>
        오류가 발생하였습니다. <br />
      </div>
    );
  }

  if (!data) {
    return <div>데이터가 존재하지 않습니다.</div>;
  }

  return (
    <StyledBody>
      <StyledMainBody>
        <div>
          <img
            style={{
              width: "50px",
            }}
            src={require("@assets/marker.png")}
            alt="merker-image"
          />
          <span>
            {address.totalRoadAddress}&nbsp;{address.buildingName}
          </span>
        </div>
        <div>
          <form>
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="검색으로 이웃의 글을 확인해보세요."
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </form>
        </div>
        <HeightBox height={"20px"} />
        <hr />
        {data.length <= 0 ? (
          "데이터가 존재하지 않아요!"
        ) : (
          <div style={{ height: "550px", overflow: "auto" }}>
            {data.map((item: any) => {
              return (
                <StyledPostDiv
                  key={item.id}
                  onClick={() => {
                    navigate(`/posts/${item.id}`, {
                      state: {
                        address: address,
                        item,
                      },
                    });
                  }}
                >
                  <h4>제목 : {item.title}</h4>
                  <span>
                    {item.writerName} | 조회수 : {item.likes} | 댓글수 :{" "}
                    {item.hits} |&nbsp;
                    {formatDate(item.createdAt)}
                  </span>
                  <hr />
                </StyledPostDiv>
              );
            })}
          </div>
        )}
      </StyledMainBody>
      <StyledWriteButton
        onClick={() => {
          navigate("/post/add", {
            state: address,
          });
        }}
      >
        글쓰기
      </StyledWriteButton>
    </StyledBody>
  );
};

export default Body;

const StyledBody = styled.div`
  /* position: relative; */
`;
const StyledMainBody = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
`;

const StyledWriteButton = styled.button`
  background: #6a3cb0;
  height: 60px;
  /* width: 100%; */
  color: #fff;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  border: 0;
  position: absolute;
  bottom: 0;
  width: 390px;
  cursor: pointer;
`;

const StyledPostDiv = styled.div`
  padding: 10px;
  cursor: pointer;

  h4 {
    font-size: 15px;
    margin-bottom: 3px;
  }
  span {
    font-size: 12px;
  }
`;
