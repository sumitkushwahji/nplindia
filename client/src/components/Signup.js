import { NavLink ,useHistory} from "react-router-dom";
import React, { useState } from "react";


function Signup() {
  const history =useHistory()
  const [user, setUser] = useState({
    name: "",
    email: "",
    work: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value; //create 2 dynamic variable
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name; //form name          name="email"
    value = e.target.value; //form value       value={user.email}

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    //only task call fetch api and transfer the data
    e.preventDefault(); //to prevent default reloading of form data
    const { name, email, work, phone, password, cpassword } = user; //object destructuring
    //here we are getting data of user.name,  user.email  and so on 
    //just by witing name ,email respectively.

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({  //always data send to server is in string form
        name,
        email,
        work,
        phone,
        password,
        cpassword,
      }),
    });
     

    //now we have to verify data coming in res or not.
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration successful");
      console.log("Registration Successful");
      history.push("/login")
    }
  };

  return (
    <>
      <div className="signup-form">
        <form method="POST" className="register-form" id="register-form"/>
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account!</p>
        <hr />
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
              name="name"
              value={user.name}
              onChange={handleInputs}
              placeholder="Username"
              required="required"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-paper-plane"></i>
              </span>
            </div>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={handleInputs}
              placeholder="Email Address"
              required="required"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-briefcase"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="work"
              value={user.work}
              onChange={handleInputs}
              placeholder="Your Profession"
              required="required"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-phone"></i>
              </span>
            </div>
            <input
              type="number"
              className="form-control"
              name="phone"
              value={user.phone}
              onChange={handleInputs}
              placeholder="Phone Number"
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
              type="text"
              className="form-control"
              name="password"
              value={user.password}
              onChange={handleInputs}
              placeholder="Password"
              required="required"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-lock"></i>
                <i className="fa fa-check"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="cpassword"
              value={user.cpassword}
              onChange={handleInputs}
              placeholder="Confirm Password"
              required="required"
            />
          </div>
        </div>
        {/* <div className="form-group">
                    <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <NavLink to="/login">Terms of Use</NavLink> &amp; <NavLink to="/login">Privacy Policy</NavLink></label>
                </div> */}
        <div className="form-group form-button">
          <input
            type="submit"
            name="signup"
            id="signup"
            className="form-submit btn btn-primary btn-lg"
            value="register"
            onClick={PostData}
          />
        </div>

        <div className="text-center">
          Already have an account? <NavLink to="/login">Login here</NavLink>
        </div>
      </div>
    </>
  );
}

export default Signup;
