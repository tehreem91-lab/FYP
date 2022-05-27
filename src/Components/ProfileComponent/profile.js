import React, { useState, useEffect } from "react";
import { Input, Select } from "antd";
import { Textarea } from "@chakra-ui/react";
import { auth } from "../../Api/axios";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import "./profile.css";
// import { MoneyOutlined, PhoneOutlined } from "@material-ui/icons";
import { useNavigate, useParams } from "react-router-dom";
import {Spinner} from 'react-bootstrap'


const Profile = () => {
  const { Option } = Select;
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const getProfile = async () => {
      await axios
        .get(
          `https://updated-innovative-server.herokuapp.com/api/user/profile/${id}`
        )
        .then((res) => {
          console.log(res.data);
          dispatch({ type: "PROFILE", payload: { profile: res.data } });
        })
        .catch((e) => console.log(e));
    };
    getProfile();
  }, []);
  const { profile } = useSelector((state) => state.FeedbackReducer);

  const [fullName, setFullName] = useState();
  const [contact, setContact] = useState();
  const [qualification, setQualification] = useState();
  const [description, setdescription] = useState("");
  const [rate, setRate] = useState();
  const [subject, setSubject] = useState();
  // const { userInfo } = useSelector((state) => state.AuthReducer);

  const handleChange = (value) => {
    setQualification(value);
  };

  const handleSubject = (value) => {
    setSubject(value);
  };

  const gotoedit = () => {
    navigate(`/edit-profile/${id}`);
  };

  return (
    <>
      <div className="container-fluid  main_div">
        <div className="container  pro_heading">
          <h2>Profile</h2>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3 left_side">
              {profile === undefined ? (
                <>
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" size="sm" />
              </>
              ) : (
                <div className="text-center pro_text">
                  <img
                    src={profile.pic}
                    alt="pro_pic"
                    className="profile_pic mt-4"
                  />
                  <p className="pro_username">@{profile.username}</p>
                  <p className="pro_name">{profile.name}</p>
                </div>
              )}
            </div>
            {profile === undefined ? (
              <>
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" size="sm" />
              </>
            ) : (
              <>
                <div className="col-md-9">
                  <div className="right_side">
                    <form>
                      <div className="row">
                        <div className="col-md-12">
                          <label className="label_profile">Full Name:</label>
                          <Input
                            size="large"
                            className="input_profile1"
                            value={profile.name}
                            onChange={(e) => setFullName(e.target.value)}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label className="label_profile">
                            Username:
                            <span className="descr">
                              (You can't change your username)
                            </span>
                          </label>
                          <Input
                            size="large"
                            className="input_profile1"
                            value={profile.username}
                            readOnly
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="label_profile">
                            Email:
                            <span className="descr">
                              (You can't change your email)
                            </span>
                          </label>
                          <Input
                            size="large"
                            className="input_profile1"
                            value={profile.email}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label className="label_profile">Contact:</label>
                          <Input
                            size="large"
                            className="input_profile1"
                            value={`+92${profile.contact}`}
                            onChange={(e) => setContact(e.target.value)}
                            readOnly
                          />
                        </div>
                      
                        {profile.role === "teacher" ? (
                          <div className="col-md-6">
                            <label className="label_profile">
                              Rate per hour:
                            </label>
                            <Input
                              size="large"
                              placeholder="$"
                              className="input_profile1"
                              value={`Rs ${profile.rate}`}
                              onChange={(e) => setRate(e.target.value)}
                              readOnly
                            />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      {/* <form> */}

                      {profile.qualification === "" ? (
                        ""
                      ) : (
                        <div className="col-md-12">
                          <label className="label_profile">
                            Qualification:
                          </label>
                          {profile.role === "teacher" ? (
                            <Input
                              size="large"
                              placeholder="$"
                              className="input_profile1"
                              value={profile.qualification}
                              readOnly
                            />
                          ) : (
                            <Input
                              size="large"
                              placeholder="$"
                              className="input_profile1"
                              value={profile.qualification}
                              readOnly
                            />
                          )}
                        </div>
                      )}
                      {profile.subject === "" ? (
                        ""
                      ) : (
                        <>
                          {profile.role === "teacher" ? (
                            <div className="col-md-12">
                              <label className="label_profile">
                                Your Teaching Subject
                              </label>
                              <Input
                                size="large"
                                placeholder="$"
                                className="input_profile1"
                                value={profile.subject}
                                readOnly
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </>
                      )}

                      {profile.desc === "" ? (
                        ""
                      ) : (
                        <div className="col-md-12 mt-1">
                          <label className="label_profile">
                            About Yourself:
                          </label>
                          <Input
                            size="large"
                            placeholder="$"
                            className="input_profile1"
                            value={profile.desc}
                            readOnly
                          />
                        </div>
                      )}

                      <button className="profile_button" onClick={gotoedit}>
                        Edit / Complete Your Profile
                      </button>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
