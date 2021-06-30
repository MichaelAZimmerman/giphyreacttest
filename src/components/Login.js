import React, { useState } from "react";

const Login = ({ setLoggedIn }) => {
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
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          id="loginBtn"
          onClick={(e) => {
            e.preventDefault();
            if (username.length > 4) {
              if (password.length > 4) {
                setLoggedIn(username);
              }
            } else {
              alert("username and password must be at least 5 char.");
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
