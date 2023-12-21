import React, { useState } from "react";
import "./App.css";
import LoginForm from "./LoginForm";
import LoginAttemptList from "./LoginAttemptList";

const App = () => {
  const [loginAttempts, setLoginAttempts] = useState([]);

  function handleLoginAttempts(login, password) {
    setLoginAttempts([...loginAttempts, { login: login, password: password }]);
  }

  return (
    <div className="App">
      <LoginForm
        onSubmit={({ login, password }) => handleLoginAttempts(login, password)}
      />
      <LoginAttemptList attempts={loginAttempts} />
    </div>
  );
};

export default App;
