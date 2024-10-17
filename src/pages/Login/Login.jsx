import React from "react";

// import css
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="login-container">
          <div className="login-title">
            <h1>AToZ Store</h1>
          </div>
          <form>
            <span className="input-prefix">+91</span>
            <input type="number" name="phoneNumber" id="phoneNumber" required />
            <button type="submit">Continue</button>
          </form>
        </div>
        <div className="login-terms">
          <p>By continuing, you agree to our </p>
          <p>
            Terms of Use <span>&</span> Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
