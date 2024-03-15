import React from 'react';
import useLocalStorage from "use-local-storage";
import { FaToggleOn } from "react-icons/fa";


function App() {
  return (
    <div className="app">
      <div className="login">
        <h1>Login</h1>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email"></input>
          <label>Password</label>
          <input type="password" placeholder="Enter your password"></input>
          <div className="remember">
            <input type="checkbox" checked></input>
            <p>Remember me</p>
          </div>
          <button>Log In</button>
        </form>
        <div className="bottom">
          <p>Forget your password?</p>
          <a href="/">Reset password</a>
          <p>Create Account</p>
        </div>
      </div>
      <div className="theme-toggle">
        <h2>Light Theme</h2>
        <FaToggleOn></FaToggleOn>
      </div>
    </div>
  );
}

export default App;
