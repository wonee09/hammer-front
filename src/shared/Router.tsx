import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@components/Layout";
import Private from "@features/auth/Private";
import UserNotAccess from "@features/auth/UserNotAccess";
import SignUp from "@pages/SignUp";
import Login from "@pages/Login";
import NotFound from "@pages/NotFound";
import Main from "@pages/Main";
import AddPost from "@pages/AddPost";
import EditPost from "@pages/EditPost";
import Post from "@pages/Post";
import PostList from "@pages/PostList";
import RequestBuildingRegister from "@pages/RequestBuildingRegister";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages requiring authentication */}
        <Route
          path="/"
          element={
            <Private>
              <Layout />
            </Private>
          }
        >
          {/* 중첩 라우팅 */}
          <Route index element={<Main />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit" element={<EditPost />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/posts" element={<PostList />} />
          <Route
            path="/buidling/request"
            element={<RequestBuildingRegister />}
          />
          <Route
            path="/buidling/request"
            element={<RequestBuildingRegister />}
          />
        </Route>
        {/* SignUp : no authentication */}
        <Route
          path="/signUp"
          element={
            <UserNotAccess>
              <SignUp />
            </UserNotAccess>
          }
        />
        {/* LogIn : no authentication */}
        <Route
          path="/login"
          element={
            <UserNotAccess>
              <Login />
            </UserNotAccess>
          }
        />
        {/* NotFound */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;