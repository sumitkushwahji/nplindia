import React, { useEffect, useState } from "react";
import dp from "../images/dp.jpg";
import meme from "../images/meme.jpg";
import edit from "../images/edit.jpg";
import { NavLink, useHistory } from "react-router-dom";

function About() {
  console.log("Inside about");

  const history = useHistory();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      console.log("Inside try");
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      console.log("after fetch");
      const data = await res.json();
      console.log(data);

      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  //To run function as soon as about function call
  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div class="container emp-profile">
      <form method="GET">
        <div class="row">
          <div class="col-md-4">
            <div class="profile-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                alt=""
              />
              <div class="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="profile-head">
              <h5>{userData.name}</h5>
              <h6>{userData.work}</h6>
              <p class="proile-rating">
                RANKINGS : <span>8/10</span>
              </p>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-2">
            <input
              type="submit"
              class="profile-edit-btn"
              name="btnAddMore"
              value="Edit Profile"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="profile-work">
              <p>WORK LINK</p>
              <a href="">Website Link</a>
              <br />
              <a href="">Bootsnipp Profile</a>
              <br />
              <a href="">Bootply Profile</a>
              <p>SKILLS</p>
              <a href="">Web Designer</a>
              <br />
              <a href="">Web Developer</a>
              <br />
              <a href="">WordPress</a>
              <br />
              <a href="">WooCommerce</a>
              <br />
              <a href="">PHP, .Net</a>
              <br />
            </div>
          </div>
          <div class="col-md-8">
            <div class="tab-content profile-tab" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                
                <div class="row">
                  <div class="col-md-6">
                    <label>Name</label>
                  </div>
                  <div class="col-md-6">
                    <p>{userData.name}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Email</label>
                  </div>
                  <div class="col-md-6">
                    <p>{userData.email}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div class="col-md-6">
                    <p>{userData.phone}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Profession</label>
                  </div>
                  <div class="col-md-6">
                    <p>{userData.work}</p>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div class="row">
                  <div class="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div class="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Hourly Rate</label>
                  </div>
                  <div class="col-md-6">
                    <p>10$/hr</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Total Projects</label>
                  </div>
                  <div class="col-md-6">
                    <p>230</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>English Level</label>
                  </div>
                  <div class="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div class="col-md-6">
                    <p>6 months</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <label>Your Bio</label>
                    <br />
                    <p>Your detail description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default About;
