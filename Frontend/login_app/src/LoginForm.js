import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      login: name,
      password: password,
    });
    setName("");
    setPassword("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="form-group">
        <label className="w-100 text-start form-label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className="w-100 text-start form-label" htmlFor="password">
          Password
        </label>
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="d-flex footer-template justify-content-end w-100">
        <button className="btn mt-2 btn-secondary" type="submit">
          Continue
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
