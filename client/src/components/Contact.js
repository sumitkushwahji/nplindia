import React, { useEffect, useState } from "react";

function Contact() {

  console.log("Inside about");
  
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  //To run function as soon as about function call
  useEffect(() => {
    const userContact = async () => {
      try {
        console.log("Inside try");
        const res = await fetch("/getdata", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("after fetch");
        const data = await res.json();
        console.log(data);

        setUserData({
          ...userData,
          name: data.name,
          email: data.email,
          phone: data.phone,
        });
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
      }
    };
    userContact();
  }, []);

  //we are storing data in states
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value }); //spread operator
  };

  //send data to backend
  const contactForm = async (e) => {
    e.preventDefault();

    // object destructuring
    const { name, email, phone, message } = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data = await res.json();

    if (!data) {
      console.log("Message not send");
    } else {
      console.log("Message send");
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <div className="container contact">
      <form method="POST">
      <div className="row">
        <div className="col-md-3">
          <div className="contact-info">
            <img
              src="https://image.ibb.co/kUASdV/contact-image.png"
              alt="image"
            />
            <h2>Contact Us</h2>
            <h4>We would love to hear from you !</h4>
          </div>
        </div>
        <div className="col-md-9">
          <div className="contact-form">
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="fname">
                First Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="Enter First Name"
                  name="name"
                  value={userData.name}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="lname">
                Mobile:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  placeholder="Enter Mobile No"
                  name="phone"
                  value={userData.phone}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="email">
                Email:
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="comment">
                Comment:
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  name="message"
                  value={userData.message}
                  onChange={handleInputs}
                  rows="5"
                  id="comment"
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button
                  type="submit"
                  className="btn btn-default"
                  onClick={contactForm}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Contact;
