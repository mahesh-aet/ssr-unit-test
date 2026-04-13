import React from "react";
import User from "../component/User";
import Profile from "../component/Profile";
import SignInForm from "../component/SignInForm";

const UserPage = () => {
  return (
    <div>
      <Profile />
      <User />
      <SignInForm />
    </div>
  );
};

export default UserPage;
