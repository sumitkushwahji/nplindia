import React, { useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from '../App'

function Login() {

   const {state , dispatch} = useContext(UserContext)

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const loginuser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("Invalid Credential");
    } else {
      dispatch({type:"USER", payload:true});
      window.alert("Login successful");
      history.push("/");
    }
  };
  return (
    <>
      <div className="login-form">
        <form method="POST">
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-user"></span>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Username"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            {/* <button type="submit" className="btn btn-primary login-btn btn-block">Log in</button> */}
            <input
              type="submit"
              name="login"
              id="login"
              className="form-submit btn btn-primary btn-lg"
              value="Log In"
              onClick={loginuser}
            />
          </div>
        </form>
        <p className="text-center text-muted small">
          Don't have an account? <NavLink to="/signup">Sign up here!</NavLink>
        </p>
      </div>
    </>
  );
}

export default Login;
