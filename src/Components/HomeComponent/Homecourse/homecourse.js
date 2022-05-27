import React from "react";
import { Link } from "react-router-dom";
import "./homecourse.css";
const Homecourse = () => {
  return (
    <div>
    
      <div className="course">
        <div className="course_heading">
            <span className="text-info fs-5">The Best Choice</span>
          <h1 className="main_courseheading text-white fs-1">The Best Courses. Learn anytime & anywhere.</h1>
          <br/>
          <Link to ="/ourcourse" className="course_button">Learn Courses</Link>
        </div>
        {/* <div className="overlay"> </div>   */}
      </div>
    </div>
   
  );
};

export default Homecourse;
