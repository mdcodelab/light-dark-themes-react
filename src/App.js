import React from 'react';
import useLocalStorage from "use-local-storage";
import { FaToggleOn } from "react-icons/fa";


function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="login">
          <h1>Login</h1>
          <form>
            <label>Email</label>
            <input type="email" placeholder="Enter your email"></input>
            <label>Password</label>
            <input type="password" placeholder="Enter your password"></input>
            <label className="remember">
              <span>Remember me</span>{" "}
              <input type="checkbox" className="checked" checked></input>
            </label>

            <button>Log In</button>
          </form>
          <div className="bottom">
            <p>Forgot your password?</p>
            <a href="/">Reset password</a>
          </div>
          <p>Create Account</p>
        </div>
        <div className="theme-toggle">
          <h2>Light Theme</h2>
          <FaToggleOn style={{fontSize: "2rem"}}></FaToggleOn>
        </div>
      </div>
    </div>
  );
}

export default App;
