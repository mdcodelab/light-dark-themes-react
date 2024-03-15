import React, { useRef } from "react";
import useLocalStorage from "use-local-storage";
import { FaToggleOn } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const title = useRef();

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // change the title
    title.current.innerText =
      newTheme === "light" ? "Light Theme" : "Dark Theme";
  };

  return (
    <div className="app" data-theme={theme}>
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
          <h2 ref={title}>Light Theme</h2>
          <FaToggleOn
            onClick={switchTheme}
            style={{ fontSize: "2rem" }}
          ></FaToggleOn>
        </div>
      </div>
    </div>
  );
}

export default App;
