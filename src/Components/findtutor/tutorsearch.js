import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar'
import "./tutorsearch.css";
import { Link} from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Button } from "react-bootstrap";
import { SchoolRounded } from "@material-ui/icons";
import { Form, FormControl } from "react-bootstrap";
const Tutorsearch = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [value, onChange] = useState(new Date());
  // const [loading, setLoading] = useState(false);
  const { teacherdata } = useSelector((state) => state.FeedbackReducer);

  useEffect(() => {
    const getTeacher = async () => {
      // setLoading(true);
      await axios
        .get(
          "https://updated-innovative-server.herokuapp.com/api/user/teachers"
        )
        .then((res) => {
          dispatch({ type: "GET_TEACHER", payload: { teacherdata: res.data } });
        })
        .catch((e) => console.log(e));
    };
    getTeacher();
  }, []);

 
  
  return (
    <div>
      <div className="tutorheader_section">
        <div className="tutor_text">
          <span className="text-info fs-6">Private and Personal Tutor</span>
          <h1 className="main_tutorheading text-white fs-1">
            Find Private Tutor Online.
          </h1>
        </div>
      </div>
      <div className="container_fluid">
        <div className="container">
          <div className="search_box">
            <div className="container">
              <div className="row">
                <div className="col-md-2 text-center fs-4 text-warning ">
                  Find Your Tutor
                </div>
                <div className="col-md-10 search_back ">
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="search_bar"
                      aria-label="Search"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container_fluid" style={{ marginTop: "70px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 ">
              {teacherdata === undefined ? (
                <Button variant="primary" disabled className="m-auto">
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </Button>
              ) : (
                <>
                  {teacherdata
                    .filter((data) => {
                      if (search === "") {
                        return data;
                      } else if (
                        data.subject
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        data.name.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return data;
                      }
                    })
                    .map((data) => {
                      return (
                        <>
                          <div className="tutor_card mt-4 ">
                            <div className="row">
                              <div className="col-md-3">
                                <div className="tutor_left">
                                  <div className="tutor_image">
                                    Top Tutor
                                    <img
                                      src={data.pic}
                                      alt=""
                                      style={{
                                        width: "100%",
                                        height: "150px",
                                        borderRadius: "0px 0px 10px 10px",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-9">
                                <div className="card_text">
                                  <div className="row">
                                    <div className="col-8">
                                      <h1 className="card_title fs-2">
                                        {data.name}
                                      </h1>
                                      <span className="tutor_qulaification">
                                        {" "}
                                        <SchoolRounded /> {data.qualification}
                                      </span>
                                    </div>
                                    <div className="col-4 text-center">
                                      <span className="tutor_rate text-warning">
                                        {data.rate} <br />
                                        Per hour
                                      </span>
                                    </div>
                                  </div>
                                  <div className="tutor_contact mt-3">
                                    Contact: {data.contact}
                                  </div>
                                  <h3 className="tutor_email mt-1 text-info">
                                    Email:{" "}
                                    <a href="https://gmail.com" target="blank">
                                      {data.email}
                                    </a>
                                  </h3>
                                  <p className="description mt-2 ">
                                    {data.desc}
                                  </p>

                                  <div className="tutor_subject">
                                    <div className="row">
                                      <div className="col-md-8">
                                        <h4 className="text-warning fs-4 mt-2">
                                          Subject:
                                        </h4>
                                        {data.subject}
                                      </div>
                                      <div className="col-md-4 text-center">
                                        <Link to='/chat' className="btn tutor_message " >
                                          Mesaage
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </>
              )}
            </div>

            <div className="col-md-4">
              <div className=" tutor_right">
                <h1 className="fs-4 text-center text-warning">Subject</h1>

                <div className="tutor_right_subject">
                  <span
                    className="bg_font"
                    onClick={() => setSearch("computer science")}
                  >
                    computer science
                  </span>
                  <span
                    className="bg_font"
                    onClick={() => setSearch("Physics")}
                  >
                    Physics
                  </span>
                  <span
                    className="bg_font"
                    onClick={() => setSearch("Mathematics")}
                  >
                    Mathematics
                  </span>
                  <span
                    className="bg_font"
                    onClick={() => setSearch("Biology")}
                  >
                    Biology
                  </span>
                  <span
                    className="bg_font"
                    onClick={() => setSearch("Statistics")}
                  >
                    Statistics
                  </span>
                  <br />
                  <span
                    className="bg_font"
                    onClick={() => setSearch("Pak studies")}
                  >
                    Pak studies
                  </span>
                  <span className="bg_font" onClick={() => setSearch("Urdu")}>
                    Urdu
                  </span>
                  <span
                    className="bg_font"
                    onClick={() => setSearch("Chemistry")}
                  >
                    chemistry
                  </span>

                  <br />
                  <span
                    className="bg_font"
                    onClick={() => setSearch("English")}
                  >
                    English
                  </span>
                

                  <span
                    className="bg_font"
                    onClick={() => setSearch("Science")}
                  >
                    Science
                  </span>

                  <span
                    className="bg_font"
                    onClick={() => setSearch("Islamiat")}
                  >
                    Islamiat
                  </span>
                
                  <span
                    className="bg_font"
                    onClick={() => setSearch("Data Structure")}
                  >
                    Data Structure
                  </span>
                  <span
                    className="bg_font"
                    onClick={() => setSearch("HRM")}
                  >
                    HRM
                  </span>
                  <span
                    className="bg_font"
                    onClick={() => setSearch("  Software Engineering")}
                  >
                    Software Engineering
                  </span>
                  <span className="bg_font" onClick={() => setSearch("Algorithms")}>
                    Algorithms
                  </span>
                  <span
                    className="bg_font"
                    onClick={() => setSearch("Database")}
                  >
                    Database
                  </span>
                </div>
                <div className='comment_section'>
                <h1 className="fs-4 text-warning text-center">Comments</h1>
                <Link to='/feedback'>
                  <p  className="comment mt-2"> Back-to-School Tutoring is a Proactive Tool Leave You comment here</p>
                  </Link>

                </div>
                <div className='calender'>
                <h1 className="fs-4 text-warning text-center">Calendar</h1>
                <Calendar onChange={onChange} value={value} className='bg-light m-auto mt-3' />

                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorsearch;
