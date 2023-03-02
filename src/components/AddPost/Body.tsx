import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { axiosAddPost } from "@api/posts";

const Body = () => {
  const location = useLocation();
  const address = location.state;
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  console.log("location", location.state);

  const onClickPostButtonHandler = async () => {
    console.log("button clicked!");
    // user정보는 global에서 가져오도록 로직 수정 필요
    const postObj = {
      title,
      contents,
      addressId: address.id,
      likes: 0,
      hits: 0,
    };

    try {
      axiosAddPost(postObj);
      alert("글쓰기가 성공하였습니다.");
      navigate("/posts", {
        state: { address },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledBody>
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
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <textarea
          name="contents"
          id="contents"
          cols={30}
          rows={10}
          placeholder="분문을 입력해주세요."
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        ></textarea>
        <br />
        <button onClick={onClickPostButtonHandler}>등록하기</button>
      </div>
    </StyledBody>
  );
};

export default Body;

const StyledBody = styled.div``;
