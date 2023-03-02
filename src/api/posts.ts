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

const axiosAddPost = async (postObj: any) => {
  const response = await axios.post(
    `${process.env.REACT_APP_AUTH_API_URL}/posts`,
    postObj,
    {
      withCredentials: true,
    }
  );
};

export { axiosGetPosts, axiosAddPost };
