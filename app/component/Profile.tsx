"use client";
import React, { useContext } from "react";
import { userContext } from "../providers/UserProvider";

const Profile = () => {
  const { name, age } = useContext(userContext);
  return (
    <div>
      <p>name: {name}</p>
      <p>age : {age}</p>
    </div>
  );
};

export default Profile;
