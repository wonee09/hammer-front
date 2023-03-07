import axios from "axios";

/**
 * @author Jay
 * @description 게시글 목록 조회
 * @param id
 * @param searchValue
 * @returns 게시글 목록
 */
const axiosGetPosts = async (id: string, searchValue: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_AUTH_API_URL}/posts`,

    {
      params: {
        id,
        searchValue,
      },
      withCredentials: true,
    }
  );

  return response.data.data;
};

/**
 * @author Jay
 * @description 게시글 등록
 * @param postObj
 * @returns 서버 응답 값
 */
const axiosAddPost = async (postObj: any) => {
  const response = await axios.post(
    `${process.env.REACT_APP_AUTH_API_URL}/posts`,
    postObj,
    {
      withCredentials: true,
    }
  );
  return response;
};

/**
 * @author Jay
 * @description 게시글 수정
 * @param postObj
 * @returns 서버 응답 값
 */
const axiosModifyPost = async (postObj: any) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_AUTH_API_URL}/posts/${postObj.id}`,
    postObj,
    {
      withCredentials: true,
    }
  );

  return response;
};

/**
 * @author Jay
 * @description 게시글 삭제
 * @param postId
 * @returns 서버 응답 값
 */
const axiosDeletePost = async (postId: string) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_AUTH_API_URL}/posts/${postId}`,
    {
      withCredentials: true,
    }
  );

  return response;
};

/**
 * @author Jay
 * @description 조회수 증가
 * @param postId
 */
const axiosPlusHits = async (postId: string) => {
  await axios.patch(
    `${process.env.REACT_APP_AUTH_API_URL}/posts/hits/${postId}`
  );
};

export {
  axiosGetPosts,
  axiosAddPost,
  axiosModifyPost,
  axiosDeletePost,
  axiosPlusHits,
};
