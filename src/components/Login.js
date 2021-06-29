import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <form>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="username"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          id="loginBtn"
          onClick={(e) => {
            e.preventDefault();
            if (username.length < 5 || password.length < 5) {
            }
          }}
        >
          Log In
        </button>
      </form>
    </>
  );
};

export default Login;
