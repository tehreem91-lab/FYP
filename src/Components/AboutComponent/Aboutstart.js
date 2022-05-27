import React from "react";
import "./aboutstart.css";
import { CheckOutlined } from "@ant-design/icons";
import about1 from "../../Assests/About/about1.png";
import { IoSchoolOutline, IoTrophyOutline } from "react-icons/io5";
import { MdOutlineApproval } from "react-icons/md";
import { Link } from "react-router-dom";
import about4 from "../../Assests/About/about4.png";
import tutor1 from "../../Assests/About/tutor1.PNG";
import tutor2 from "../../Assests/About/tutor2.PNG";
import tutor3 from "../../Assests/About/tutor3.PNG";

const Aboutstart = () => {
  const FeatureTutor = [
    {
      name: "Zainul Abidin",
      subject: "Physics",
      rate: "150Rs",
      image: tutor2,
    },

    {
      name: "Adeela Farooq",
      subject: "English",
      rate: "200Rs",
      image: tutor1,
    },

    {
      name: "Wasim Malik",
      subject: "Biology",
      rate: "200Rs",
      image: tutor3,
    },
  ];
  return (
    <>
      {/* 1st part */}
      <div className="container_fluid about_upper">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_left">
                <h2 className="text-warning">Our Services</h2>
                <span className="fs-4">What we do</span>
                <h1 className="about_main_heading">
                  Learn Something New and Grow Your Skills
                </h1>
                <p className="about_sub_heading">
                  Innovative Learning is the best platform for private online
                  lessons with a flexible payment system and affordable prices.
                  WE Blieve that every one has capacity to creative, Turitor is
                  a place where people Develop their own potential so booked
                  your first lesson
                </p>
                <Link to="/ourcourse" className="btn intro_btn1">
                  View Courses
                </Link>
                <Link to="/findtutor" className="btn  intro_btn2  ms-2">
                  Find Your Tutor
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_right">
                <img src={about4} alt="" className="abouttop_image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2nt part */}
      <div className="container_fluid about_back ">
        <div className="container ">
          <div className="about_back1">
            <span className="text-light">All Tutor Are Guaranteed by Us </span>
            <h1 className="aboutback_heading">
              100% <span style={{ color: "#f46b3e" }}>Guarantee</span>
            </h1>
            <div className="table_section">
              <div className="row">
                <div className="col-md-1 ">
                  <IoSchoolOutline className="table_icon" />
                </div>
                <div className="col-md-3">
                  <h2 className="table_heading">Professional Tutor</h2>
                  <p className="mt-2 text-white">
                    Professional teachers have training as educators and/or
                    extensive professional teaching experience
                  </p>
                </div>
                <div className="col-md-1">
                  <IoTrophyOutline className="table_icon" />
                </div>
                <div className="col-md-3">
                  <h2 className="table_heading">Real Result Only</h2>
                  <p className="mt-2 text-white">
                    Real result measures that indicate how much work is done and
                    define what is produced.
                  </p>
                </div>
                <div className="col-md-1 ">
                  <MdOutlineApproval className="table_icon" />
                </div>
                <div className="col-md-3">
                  <h2 className="table_heading">University Approve</h2>
                  <p className="mt-2 text-white">
                    {" "}
                    A certified teacher is an educator who has earned
                    credentials from an authoritative source, such as the
                    government.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd part */}
      <div className="container_fluid about_upper">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="about_tutor_left">
                <img src={about1} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_left">
                <h1 className="about_main_heading">
                  We are Tutor and Online Learning Community
                </h1>
                <p className="about_sub_heading">
                  Professional teachers have training as educators and/or
                  extensive professional teaching experience. Teachers who spend
                  more time focusing on private lessons than regular classes can
                  cause greater inefficiencies in the mainstream school system.
                  Situations in which teachers provide extra private lessons for
                  pupils for whom they are already responsible in the public
                  system can lead to corruption.
               
                <div className="row mt-4">
                  <div className="col-6 text-center">
                    <h5>
                      {" "}
                      <CheckOutlined className="about_tutor_icon" /> Expert
                      training
                    </h5>
                  </div>
                  <div className="col-6">
                    <h5>
                      {" "}
                      <CheckOutlined className="about_tutor_icon" /> Life Time
                      Access
                    </h5>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-6 text-center">
                    <h5>
                      {" "}
                      <CheckOutlined className="about_tutor_icon" /> Remote
                      Learning
                    </h5>
                  </div>
                  <div className="col-6">
                    <h5>
                      {" "}
                      <CheckOutlined className="about_tutor_icon" /> Self
                      Development
                    </h5>
                  </div>
                </div>
                </p>
                <Link to="/ourcourse" className="btn intro_btn1 mt-4">
                  View Courses
                </Link>
                <Link to="/findtutor" className="btn  intro_btn2 mt-4 ms-2">
                  Find Your Tutor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4th part */}
      <div className="container_fluid featuretutor_back ">
        <div className="container">
        <div className="feature_text">
            <span>Find the Right tutor for you</span>
            <h1 className="feature_heading">Featured Tutors</h1>
          </div>
          <div className="featuretutor_section mt-3 ">
          <div className="row">
              {FeatureTutor.map((item) => {
                return (
                  <>
                    <div className="col-md-4">
                      <div className="featuretutor_card ">
                        <div className="featuretutor_image_section">
                          <img
                            src={item.image}
                            alt=""
                            className="featuretutor_image"
                          />
                        </div>
                        <div className="featuretutor_card_text">
                          <span style={{ fontSize: "18px" }}>
                            {item.subject}
                          </span>
                          <h5 style={{ fontSize: "15px" }}>
                            {item.rate}/per hour
                          </h5>
                          <h4 className="feature_name">{item.name}</h4>
                          <Link
                            className="btn feature_button mt-2 "
                            to="/findTutor"
                          >
                            Find Your Tutor
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        </div>
        {/* 5th part */}
        
      <div className="course">
        <div className="course_heading">
            <span className="text-info fs-5">The Best Choice</span>
          <h1 className="main_courseheading text-white fs-1">The Best Courses. Learn anytime & anywhere.</h1>
          <br/>
          <Link to ="/ourcourse" className="course_button">Learn Courses</Link>
        </div>
        {/* <div className="overlay"> </div>   */}
      </div>
        {/* 6th part */}
        <div className="container_fluid apply_back">
        <div className="container">
          <h1 className="apply_heading ms-2 ">
            Apply <span className="text-warning"> Now</span>{" "}
          </h1>
          <div className="main_apply">
            <div className="apply_now bg-white">
              <h1 className="subject_heading ">
                Calling{" "}
                <span className="text-warning">
                  <br /> All Experts!
                </span>{" "}
              </h1>
              <p className="mt-3" style={{ textAligne: "justify" }}>
                When private tutoring is provided by well trained tutor however
                the effects can be dramatic, with pupils improving performance
                by two standard deviations. The system of excessive private
                tutoring will take time for activities such as playing soccer or
                joining clubs from students.
              </p>
              {/* <button onClick="/register" className="apply_button">Apply Now</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutstart;
