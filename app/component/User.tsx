/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { getUsers } from "../api/UserApi";

const fetchUser = async () => {
  const res = await getUsers();
  return res.data;
};

const User = async () => {
  const users = await fetchUser();
  //   console.log(users);
  return (
    <>
      <h4>user List</h4>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {users.map((user: any) => {
          return (
            <div
              key={user.id}
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid",
                padding: 2,
              }}
            >
              <span>{user.name}</span>
              <span>{user.email}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default User;
