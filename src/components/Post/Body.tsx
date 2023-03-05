import HeightBox from "@elem/HeightBox";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { axiosGetComments, axiosAddComment } from "@api/comments";
import { axiosDeletePost } from "@api/posts";

const Body = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate, data: mutationData } = useMutation(axiosAddComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
      setComment("");
    },
  });

  const address = location.state.address;
  const item = location.state.item;

  const [comment, setComment] = useState("");
  const { isLoading, isError, data } = useQuery("comments", () =>
    axiosGetComments(item.id)
  );

  if (isLoading) {
    return <div>댓글 로딩중입니다..!</div>;
  }

  if (isError) {
    return <div>댓글을 불러오는 데에 오류가 발생하였습니다.</div>;
  }

  return (
    <StyledBody>
      <div
        style={{
          marginBottom: "20px",
        }}
      >
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
      <StyledTitle>{item.title}</StyledTitle>
      <HeightBox height={"10px"} />
      <StyledContents>{item.contents}</StyledContents>
      <HeightBox height={"20px"} />
      <span style={{ color: "#767676" }}>
        조회수 {item.hits} | {item.createdAt} |{" "}
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            // 넘길 내용 : item 객체와 address 객체
            navigate(`/post/modify/${item.id}`, {
              state: {
                item,
                address,
              },
            });
          }}
        >
          수정
        </span>{" "}
        |{" "}
        <span
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => {
            const isConfirmed = window.confirm(
              "삭제하면 되돌릴 수 없습니다. 게속하시겠습니까?"
            );
            if (isConfirmed) {
              axiosDeletePost(item.id)
                .then((res) => {
                  alert(
                    "삭제처리가 완료되었습니다. Search페이지로(협의 필요)."
                  );
                  navigate("/search");
                })
                .catch((err) => {
                  console.log(
                    "삭제처리 중 오류가 발생하였습니다. 오류내용 : ",
                    err
                  );
                });
              // alert("COMPONENT");
            } else {
              return;
            }
          }}
        >
          삭제
        </span>
      </span>
      <HeightBox height={"10px"} />
      <StyledP>댓글 0</StyledP>
      <HeightBox height={"5px"} />
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          if (!comment) {
            alert("댓글을 입력해주세요!");
            return false;
          }

          const commentObj = {
            postId: item.id,
            comment,
          };

          try {
            mutate(commentObj);
          } catch (err) {
            console.log("err");
          }
        }}
      >
        <div
          style={{
            display: "flex",
            paddingLeft: "10px",
            paddingRight: "10px",
            justifyContent: "space-between",
          }}
        >
          <input
            style={{
              width: "90%",
              border: "0",
            }}
            placeholder="단순 비방글은 삭제됩니다."
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button>등록</button>
        </div>
      </form>
      <div style={{ height: "450px", overflow: "auto" }}>
        {data.map((comment: any) => {
          return (
            <div
              key={comment.id}
              style={{
                height: "47px",
                background: "#F7F2FF",
                margin: "3px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "10px",
              }}
            >
              <p>{comment.contents}</p>
              <span>
                {comment.writerId} | {comment.createdAt}
              </span>
            </div>
          );
        })}
      </div>
    </StyledBody>
  );
};

export default Body;

const StyledBody = styled.div`
  padding-top: 20px;
  padding-left: 16px;
  padding-right: 16px;
`;

const StyledTitle = styled.h5`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
`;

const StyledContents = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const StyledP = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 7px 10px;
  gap: 5px;
  height: 30px;
  background: #a36ef4;
  border-radius: 10px;
  color: #fff;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;
