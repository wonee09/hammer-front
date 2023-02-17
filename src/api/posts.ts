import axios from "axios";

const getPosts = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_AUTH_API_URL}/posts`
  );
  return response.data;
};

export { getPosts };
