import axios from "axios";

/**
 * @author Jay
 * @description 게시글에 해당하는 댓글 리스트를 조회
 * @param postId
 * @returns
 */
const axiosGetComments = async (postId: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_AUTH_API_URL}/comments/${postId}`,
    { withCredentials: true }
  );

  return response.data.data;
};

/**
 * @author Jay
 * @description 새 댓글 등록
 * @param commentObj
 * @returns
 */
const axiosAddComment = async (commentObj: any) => {
  const response = await axios.post(
    `${process.env.REACT_APP_AUTH_API_URL}/comment`,
    commentObj,
    {
      withCredentials: true,
    }
  );

  return response.data.data;
};

export { axiosGetComments, axiosAddComment };
