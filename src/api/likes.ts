import axios from "axios";

/**
 * @author Jay
 * @description 좋아요
 * @param likeObj
 */
const axiosHandleLikes = async (likeObj: any) => {
  await axios.post(
    `${process.env.REACT_APP_AUTH_API_URL}/likes/${likeObj.postId}`,
    { likeYn: likeObj.likeYn },
    {
      withCredentials: true,
    }
  );
};

export { axiosHandleLikes };
