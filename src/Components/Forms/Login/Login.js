import React, { useState } from "react";
import FooterLogo from "../../../Assests/FooterLogo.png";
import { Input } from "antd";
import { Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { auth } from "../../../Api/axios";
import { toast } from "react-toastify";
import axios from "axios";
import {ArrowLeftOutlined} from '@ant-design/icons'

import "./login.css";
import {
  MailOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  KeyOutlined,
} from "@ant-design/icons";
export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LOGIN = async (e) => {
    e.preventDefault();
    setLoading(true)
    await axios
      .post("https://updated-innovative-server.herokuapp.com/api/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        localStorage.setItem("token", res.data.token);
        dispatch({
          type: "LOGIN",
          payload: {
            token: localStorage.getItem("token"),
            userInfo: JSON.parse(localStorage.getItem("userInfo")),
          },
        });
        toast.success("login Successfully");
        setLoading(false)
        navigate("/");
      })
      .catch((e) =>
      {
        console.log(e)
        toast.error(e.response.data.message)
      }
      );
  };

  return (
    <>
      <div className="container-fluid pt-4 main_wrapper">
        <div className="container pt-3 pb-3 inside_wrapper">
          <div className="container in_wrapper login-wrapper mt-5">
            
            <div className="main_heading mt-5">
            <Link to='/' className="go_back"> <ArrowLeftOutlined className="home_icon"/> Go back to Home</Link>
              <h1 className="register_heading fs-3 mt-4">Login</h1>
              <h6 className="already mt-2">
                Don't have an account ? <span className="move">
                  <Link to="/register" className="text-warning">
                    Register
                  </Link>
                </span>
              </h6>
            </div>
            <div className="row">
              <div className="col-md-7">
                <form className="row g-2">
                  <div className="col-md-12">
                    <label className="input_label">Email:</label>

                    <Input
                      size="large"
                      placeholder="Email"
                      prefix={<MailOutlined />}
                      className="input_field"
                      type="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="input_label">Password:</label>

                    <Input.Password
                      placeholder="input password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                      prefix={<KeyOutlined />}
                      className="input_field"
                      size="large"
                      type="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
                  <button className="btn_submit" onClick={LOGIN}>
                  {loading ? <Spinner animation="border" size="sm" /> : "Login"}
                  </button>
                  
                </form>
               
              </div>
              <div className="col-md-5 text-center">
                <div className="IMAGE">
                  <img src={FooterLogo} alt="" className="w-50 h-50 mt-3 m-auto " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
