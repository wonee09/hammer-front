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

export { getPosts, getComments };
