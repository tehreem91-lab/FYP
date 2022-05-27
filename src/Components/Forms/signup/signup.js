import React, { useState } from "react";
import FooterLogo from "../../../Assests/FooterLogo.png";
import { Input } from "antd";
import { Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import { FiLogIn } from "react-icons/fi";
// import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./signup.css";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  KeyOutlined,
} from "@ant-design/icons";
import { auth } from "../../../Api/axios";
// import auth from '../../../Api/axios/';

export default function Signup() {
  // const dispatch = useDispatch();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [gender, setgender] = useState("");
  const [role, setrole] = useState("");
  const [contact, setcontact] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState();
  const fullName = firstName + " " + lastName;
  const navigate = useNavigate();
  const REGISTER = async (e) => {
    e.preventDefault();
    setLoading(true);
    await auth
      .post("/register", {
        name: fullName,
        email: email,
        username: username,
        contact: contact,
        gender: gender,
        role: role,
        password: password,
        pic: pic,
      })
      .then((res) => {
        console.log(res.data);
        toast.success("user register successfully");
        setLoading(false);
        navigate("/login");
      })

      .catch((e) => {
        console.log(e);
        toast.error(e.response.data.message);
      });
  };

  const postDetails = (pics) => {
    if (pics === undefined) {
      console.log("Please upload Image");
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "innovative-learning");
      data.append("cloud_name", "hamza7681");
      fetch("https://api.cloudinary.com/v1_1/hamza7681/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const CheckValidation = (e)=>
  {
     const confrimPass = e.target.value;
     setConfirmpassword(confrimPass)
     if(password!==confrimPass) {
      setIsError("confirm password should be match with password");
     }else{
       setIsError("");
     }
  }

  return (
    <>
      <div className="container-fluid pt-4 Main_wrapper ">
        <div className="container pt-3 pb-3 INSIDE_wrapper mt-4">
          <div className="container in_wrapper">
            <div className="main_heading">
              <Link to="/" className="go_back">
                {" "}
                <ArrowLeftOutlined className="home_icon" /> Go back to Home
              </Link>
              <h1 className="register_heading fs-3 mt-2">
                Register your account
              </h1>
              <h6 className="already">
                Already register ?
                <span className="move">
                  {" "}
                  <Link to="/login" className="text-warning">
                    Login
                  </Link>
                </span>
              </h6>
            </div>
            <div className="row">
              <div className="col-md-7">
                <form className="row g-2">
                  <div className="col-md-6">
                    <label className="input_label">First Name:</label>
                    <Input
                      size="large"
                      placeholder="First Name"
                      prefix={<UserOutlined />}
                      className="input_field"
                      value={firstName}
                      onChange={(e) => setfirstName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="input_label">Last Name:</label>

                    <Input
                      size="large"
                      placeholder="Last Name"
                      prefix={<UserOutlined />}
                      className="input_field"
                      value={lastName}
                      onChange={(e) => setlastName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="input_label">Email:</label>

                    <Input
                      size="large"
                      placeholder="Email"
                      prefix={<MailOutlined />}
                      className="input_field"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="input_label">Username:</label>

                    <Input
                      size="large"
                      placeholder="Username"
                      prefix={<UserOutlined />}
                      className="input_field"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="input_label">Contact:</label>

                    <Input
                      size="large"
                      placeholder="Contact"
                      prefix={<PhoneOutlined />}
                      className="input_field"
                      value={contact}
                      onChange={(e) => setcontact(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12 mt-3 ">
                    <label className="input_label">Gender:</label>
                    <span className="radio_btn">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={(e) => setgender(e.target.value)}
                      />
                      <span className="gender">Male</span>
                    </span>
                    <span className="radio_btn1">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={(e) => setgender(e.target.value)}
                      />
                      <span className="gender">Female</span>
                    </span>
                  </div>
                  <div className="col-md-12 mt-3 ">
                    <label className="input_label">Role:</label>
                    <span className="radio_btn">
                      <input
                        type="radio"
                        name="role"
                        value="student"
                        onChange={(e) => setrole(e.target.value)}
                      />
                      <span className="role">Student</span>
                    </span>
                    <span className="radio_btn1">
                      <input
                        type="radio"
                        name="role"
                        value="teacher"
                        onChange={(e) => setrole(e.target.value)}
                      />
                      <span className="role">Teacher</span>
                    </span>
                  </div>
                  <div className="col-md-6">
                    <label className="input_label">Password:
                    <span className="descr text-white">
                              (You can't change your Password)
                            </span>
                    </label>

                    <Input.Password
                      placeholder="input password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                      prefix={<KeyOutlined />}
                      className="input_field"
                      size="large"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                    
                  </div>
                  <div className="col-md-6">
                    <label className="input_label">Confirm Password:</label>

                    <Input.Password
                      placeholder="input password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                      prefix={<KeyOutlined />}
                      className="input_field"
                      size="large"
                      value={confirmpassword}
                      onChange={(e) =>CheckValidation(e)}
                    />
                   <span className="error_msg">{isError}</span>
                  </div>
                  <div className="col-12">
                    <label className="input_label">
                      Select Profile Picture:
                      <span className="descr text-white">
                              (You upload your profile picture only once)
                            </span>
                    </label>
                    <input
                      className="form-control"
                      style={{ borderRadius: "25px" }}
                      type="file"
                      accept="image/*"
                      onChange={(e) => postDetails(e.target.files[0])}
                    />
                  </div>
                  <button className="btn_submit" onClick={REGISTER}>
                    {loading ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "Register"
                    )}
                  </button>
                </form>
              </div>
              <div className="col-md-5">
                <div className="image text-center">
                  <img src={FooterLogo} alt="" className="w-50  m-auto mt-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
