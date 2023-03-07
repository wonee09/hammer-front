import HeightBox from "@elem/HeightBox";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { axiosGetPosts } from "@api/posts";
import { axiosHandleLikes } from "@api/likes";
import { useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Body = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const address = location.state.address;
  const queryClient = useQueryClient();

  const formatDate = (str: string) => {
    let result = str.substring(0, 20);

    return result;
  };

  if (!location.state) {
    alert("올바르지 않은 접근입니다. 주소검색 페이지로 이동할게요!");
    navigate("/search");
  }

  // 좋아요 뮤테이트
  // axiosHandleLikes -> postId, likeYn
  const { mutate: likesMutate, data: likesMutationData } = useMutation(
    axiosHandleLikes,
    {
      onSuccess: () => {
        // 조회수가 갱신되면 postList를 invalidate 해야 뒤로가기 했을 때도 리렌더링
        queryClient.invalidateQueries("postList");
      },
    }
  );

  // 좋아요 handler
  const onClicklikeButtonHandler = (itemId: string, likeYn: boolean) => {
    const likesObj = {
      postId: itemId,
      likeYn: likeYn,
    };
    likesMutate(likesObj);
  };

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
              // console.log("item", item);
              return (
                <div key={item.id}>
                  <StyledPostDiv>
                    <div
                      onClick={() => {
                        navigate(`/posts/${item.id}`, {
                          state: {
                            address: address,
                            item,
                          },
                        });
                      }}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <h4>제목 : {item.title}</h4>
                      <span>
                        {item.writerName} | 조회수 : {item.hits} | 댓글수 :
                        {item.replyCount} |&nbsp;
                        {formatDate(item.createdAt)}
                      </span>
                    </div>
                    {item.realLikeYn === false ? (
                      <FavoriteBorderIcon
                        style={{
                          cursor: "pointer",
                          color: "#6A3CB0",
                        }}
                        fontSize="large"
                        onClick={() => onClicklikeButtonHandler(item.id, true)}
                      />
                    ) : (
                      <FavoriteIcon
                        style={{
                          cursor: "pointer",
                          color: "#6A3CB0",
                          border: "0",
                        }}
                        fontSize="large"
                        onClick={() => onClicklikeButtonHandler(item.id, false)}
                      />
                    )}
                  </StyledPostDiv>

                  <hr />
                </div>
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
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 15px;
    margin-bottom: 3px;
  }
  span {
    font-size: 12px;
  }
`;
