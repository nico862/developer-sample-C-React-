import React, { useState } from "react";
import "./LoginAttemptList.css";

const LoginAttempt = (props) => (
  <li className="list-group-item">
    <span>Login: {props.attempt.login}</span>
    <span>Password: {props.attempt.password}</span>
  </li>
);

const LoginAttemptList = (props) => {
  const [filter, setFilter] = useState("");

  return (
    <div className="Attempt-List-Main w-100 mt-3">
      <h3>Recent activity</h3>

      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          Filter
        </span>
        <input
          type="input"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <ul className="Attempt-List list-group">
        {props.attempts
          .filter((f) => f.login.includes(filter))
          .map((m) => {
            return <LoginAttempt attempt={m} />;
          })}
      </ul>
    </div>
  );
};

export default LoginAttemptList;
