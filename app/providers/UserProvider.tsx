"use client";
import React, { Children, createContext, ReactNode } from "react";

const user = {
  name: "mahesh",
  age: 10,
};

export const userContext = createContext(user);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};
