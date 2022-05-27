import React, { useEffect, useState } from "react";
import "./profile.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Input, Select } from "antd";
import { Textarea } from "@chakra-ui/react";
import { toast } from "react-toastify";

const EditProfile = () => {
  const { Option } = Select;
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState();
  const [contact, setContact] = useState();
  const [rate, setRate] = useState();
  const [qualification, setQualification] = useState();
  const [subject, setSubject] = useState();
  const [descr, setDescr] = useState();

  useEffect(() => {
    const getProfile = async () => {
      await axios
        .get(
          `https://updated-innovative-server.herokuapp.com/api/user/profile/${id}`
        )
        .then((res) => {
          console.log("This is Profile", res.data);
          dispatch({ type: "PROFILE", payload: { profile: res.data } });
        })
        .catch((e) => console.log(e));
    };
    getProfile();
  }, []);
  const { profile } = useSelector((state) => state.FeedbackReducer);
  const handleChange = (value) => {
    setQualification(value);
  };

  const handleSubject = (value) => {
    setSubject(value);
  };

  const save = async (e) => {
    e.preventDefault();
    // console.log(qualification, descr, fullName, contact, rate, subject);
    await axios
      .patch(
        `https://updated-innovative-server.herokuapp.com/api/user/update-profile/${id}`,
        {
          qualification: qualification,
          desc: descr,
          name: fullName,
          contact: contact,
          rate: rate,
          subject: subject,
        }
      )
      .then((res) => {
        console.log(res)
        navigate(`/profile/${id}`)
        toast.success("Your Profile has been updated. Go back to Profile Page");
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="container-fluid  main_div">
        <div className="container  pro_heading">
          <h2>Edit Profile</h2>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3 left_side">
              {profile === undefined ? (
                "loading..."
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
              " Loading..."
            ) : (
              <>
                <div className="col-md-9">
                  <div className="right_side">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="label_profile">Full Name:</label>
                        <Input
                          size="large"
                          className="input_profile"
                          placeholder="Enter your new name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
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
                          className="input_profile"
                          type="number"
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                        />
                      </div>
                      {profile.role === "teacher" ? (
                        <div className="col-md-6">
                          <label className="label_profile">
                            Rate per hour:
                          </label>
                          <Input
                            size="large"
                            placeholder="Rs"
                            type="number"
                            className="input_profile"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    {/* <form> */}

                    <div className="col-md-12">
                      <label className="label_profile">Qualification:</label>
                      {profile.role === "teacher" ? (
                        <Select
                          defaultValue="Please select your qualification"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          readOnly
                        >
                          <Option value="B.A (2 years)">B.A (2 years)</Option>
                          <Option value="BSc (2 years)">BSc (2 years)</Option>
                          <Option value="BS Hons. (4 years)">
                            BS Hons. (4 years)
                          </Option>
                          <Option value="MS / M.Phill">MS / M.Phill</Option>
                          <Option value="M.A ">M.A</Option>
                          <Option value="MSc ">MSc</Option>

                          <Option value="Doctorate ">Doctorate</Option>
                          <Option value="Post Doctorate ">
                            Post Doctorate
                          </Option>
                        </Select>
                      ) : (
                        <Select
                          defaultValue="Please select your qualification"
                          style={{ width: "100%" }}
                          readOnly
                          onChange={handleChange}
                        >
                          <Option value="9th">9th</Option>
                          <Option value="10th">10th</Option>
                          <Option value="11th">11th</Option>
                          <Option value="12th ">12th</Option>
                          <Option value="Undergraduate ">Undergraduate</Option>
                          <Option value="Postgraduate ">Postgraduate</Option>
                        </Select>
                      )}
                    </div>

                    <div className="row mt-3">
                      {profile.role === "teacher" ? (
                        <div className="col-md-12">
                          <label className="label_profile">
                            Select your subject that you want to teach:
                            <span className="descr">(Only One)</span>
                          </label>
                          <Select
                            defaultValue="Please select your subject"
                            style={{ width: "100%" }}
                            onChange={handleSubject}
                          >
                            <Option value="Physics">Physics</Option>
                            <Option value="Mathematics">Mathematics</Option>
                            <Option value="Chemistry">Chemistry</Option>
                            <Option value="Computer Science ">
                              Computer Science
                            </Option>
                            <Option value="English ">English</Option>
                            <Option value="Biology ">Biology</Option>
                            <Option value="Statistics ">Statistics</Option>
                            <Option value="Islamiat ">Islamiat</Option>
                            <Option value="Accountings ">Accountings</Option>
                            <Option value="Pakistan Studies ">
                              Pakistan Studies
                            </Option>
                          </Select>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="col-md-12 mt-1">
                      <label className="label_profile">
                        Tell us something about yourself:
                      </label>
                      <Textarea
                        size="large"
                        className="input_profile"
                        value={descr}
                        onChange={(e) => setDescr(e.target.value)}
                      />
                    </div>

                    <button className="profile_button" onClick={save}>
                      Save
                    </button>
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

export default EditProfile;
