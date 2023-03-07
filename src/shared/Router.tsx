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
import SendAuthMail from "@pages/SendAuthMail";
import SearchBuilding from "@pages/SearchBuilding";
import Notice from "@pages/Notice";
import ModifyPost from "@pages/ModifyPost";

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
          {/* <Route index element={<Main />} /> */}
          <Route index element={<SearchBuilding />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit" element={<EditPost />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/search" element={<SearchBuilding />} />
          <Route path="/post/modify/:id" element={<ModifyPost />} />
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
        {/* EmailAuth : no authentication, but mush have props from previous page */}
        <Route
          path="/emailAuth"
          element={
            <UserNotAccess>
              <SendAuthMail />
            </UserNotAccess>
          }
        />
        <Route
          path="/notice"
          element={
            <UserNotAccess>
              <Notice />
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
