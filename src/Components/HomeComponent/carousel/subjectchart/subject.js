import React from "react";
import {
  BookFilled,
  PieChartFilled,
  MedicineBoxFilled,
  HistoryOutlined,
} from "@ant-design/icons";
import { GiChemicalTank } from "react-icons/gi";
import { ArrowLeftOutlined } from "@ant-design/icons";
import {Link} from 'react-router-dom'
// import {
//   FaEtsy,
//   FaFortAwesome,
//   FaBiohazard,
//   FaMosque,
//   FaVectorSquare,
//   FaDatabase,
//   FaMediumM,
// } from "react-icons/fa";
// import { MdOutlineAccountBalanceWallet } from "react-icons/md";
// import { GiChemicalTank, GiArabicDoor, GiHumanPyramid } from "react-icons/gi";
// import { RiComputerFill } from "react-icons/ri";
import "./subject.css";
const Subject = () => {
  return (
    <>
      <div className="container_fluid subject">
        <div className="container">
          <h1 className="subject_heading ">
            Useful <span className="text-warning"> Information</span>{" "}
          </h1>
          <div className="subject_box">
            
            <div className="inner_subject_box">
              <h1 className="fs-4 text-warning">Most Popular</h1>
              <h1 className="fs-2 trending ">Trending Subjects</h1>
              <div className="row mt-2">
                <div className="col-6"> <a href="/findtutor" target='blank'>English</a></div>
                <div className="col-6"><a href="/findtutor" target='blank'>Physics</a></div>
              </div>
              <div className="row">
                <div className="col-6"> <a href="/findtutor" target='blank'>Chemistery</a></div>
                <div className="col-6"><a href="/findtutor" target='blank'>Biology</a></div>
              </div>
              <div className="row">
                <div className="col-6"> <a href="/findtutor" target='blank'>English</a></div>
                <div className="col-6"><a href="/findtutor" target='blank'>Physics</a></div>
              </div>
              <div className="row">
              <div className="col-6"> <a href="/findtutor" target='blank'>ComputerScience</a></div>
                <div className="col-6"><a href="/findtutor" target='blank'>Urdu</a></div>
              </div>
              <div className="row">
              <div className="col-6"> <a href="/findtutor" target='blank'>Islamiat</a></div>
                <div className="col-6"><a href="/findtutor" target='blank'>Social Study</a></div>
              </div>
              <div className="row">
              <div className="col-6"> <a href="/findtutor" target='blank'>Accounting</a></div>
                <div className="col-6"><a href="/findtutor" target='blank'>Statistics</a></div>
                </div>
              <Link to="findtutor" className="go_tutor mt-2">
                {" "}
                <ArrowLeftOutlined className="home_icon" /> More Subjects
              </Link>
            </div>

          </div>
        </div>
      </div>
     
    </>
  );
};
export default Subject;
