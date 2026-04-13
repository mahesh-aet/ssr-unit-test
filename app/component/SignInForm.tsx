"use client";
import React, { useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>email</label>
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label>password</label>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default SignInForm;
