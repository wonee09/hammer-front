import axios from "axios";

const getPosts = async (id: string, searchValue: string) => {
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

const getComments = async (postId: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_AUTH_API_URL}/comments/${postId}`,
    { withCredentials: true }
  );

  return response.data.data;
};

const addComment = async (commentObj: any) => {
  const response = await axios.post(
    "http://localhost:3018/api/comment",
    commentObj,
    {
      withCredentials: true,
    }
  );

  console.log("response1231232", response.data.data);

  return response.data.data;
};

export { getPosts, getComments, addComment };
