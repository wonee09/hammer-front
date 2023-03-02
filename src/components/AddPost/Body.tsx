import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

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
    const response = await axios.post(
      "http://localhost:3018/api/posts",
      postObj,
      {
        withCredentials: true,
      }
    );

    console.log("response => ", response);
    alert("글쓰기가 성공하였습니다.");

    console.log("글쓰기에서 보낸 address!", address);

    navigate("/posts", {
      state: { address },
    });
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
