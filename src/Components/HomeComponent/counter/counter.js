import React,{useState,useEffect} from "react";
import "./counter.css";
import axios from 'axios';
import CountUp from "react-countup";
import { FaUserGraduate } from "react-icons/fa";
import { GiTeacher, GiBookAura } from "react-icons/gi";
// import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const [getstudents, setGetStudents] = useState([]);
  const [getteachers, setGetTeachers] = useState([]);
  const [getfeedback, setGetfeedback] = useState([]);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const getTeacher = async () => {
  //     await axios
  //       .get(
  //         "https://updated-innovative-server.herokuapp.com/api/user/teachers"
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //      setGetStudents(res.data);
         
        
  //       })
  //       .catch((e) => console.log(e));
  //   };
  //   getTeacher();
  // }, []);
  
  useEffect(() => {
     axios
    .get("https://updated-innovative-server.herokuapp.com/api/user/students")
    .then((res) => {
      console.log(res.data);
      setGetStudents(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
  }, []);

  useEffect(() => {
    axios
      .get("https://updated-innovative-server.herokuapp.com/api/user/teachers")
      .then((res) => {
        console.log(res);
        setGetTeachers(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
     axios
    .get("https://updated-innovative-server.herokuapp.com/api/user/students")
    .then((res) => {
      console.log(res.data);
      setGetStudents(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
  }, []);

  useEffect(() => {
    axios
   .get("https://updated-innovative-server.herokuapp.com/api/user/getfeedback")
   .then((res) => {
     console.log(res.data);
     setGetfeedback(res.data);
   })
   .catch((e) => {
     console.log(e);
   });
 }, []);

  return (
    <>
      <div className="container-fluid counter-back">
        <div className="container">
          <div className="row text-center">
           
            <h2 className="text-white fs-3">Our Popular Courses</h2>{" "}
          </div>
          <div className="counter-container ">
            <div className="row mt-5">
              <div className="col-md-4">
                <FaUserGraduate
                  style={{ width: "35%", height: "35%", margin: "auto" }}
                />
                <br />
                <CountUp start={0} end={getstudents.length} duration={5} className="fs-3 " />
                <h6 className="text-warning">Students Enrolled</h6>
              </div>
              <div className="col-md-4">
                <GiTeacher
                  style={{ width: "35%", height: "35%", margin: "auto" }}
                />{" "}
                <br />
                <CountUp start={0} end={getteachers.length} duration={6} className="fs-3" />
                <h6 className="text-warning">Available Teachers</h6>
              </div>
              <div className="col-md-4">
                <GiBookAura
                  style={{ width: "35%", height: "35%", margin: "auto" }}
                />{" "}
                <br />
                <CountUp end={getfeedback.length} duration={7} className="fs-3" />
                <h6 className="text-warning">Course published</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Counter;
