import React, { useState } from "react";

// import css
import "./login.css";

const Login = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    let { value } = e.target;
    value = value.replace(/[^0-9]/g,"");
    if(value.length <= 10){
      setInputValue(value);
    }
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="login">
        <div className="login-container">
          <div className="login-title">
            <h1>AToZ Store</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <span className="input-prefix">+91</span>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              pattern="[0-9]*"
              onChange={handleChange}
              placeholder="Mobile Number"
              value={inputValue}
              required
            />
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
