import React, { useState } from "react";
import "./contact.css";
import { Input } from "antd";
import { toast } from "react-toastify";
import { auth } from "../../Api/axios";
import {
  PhoneFilled,
  MailFilled,
  EnvironmentFilled,
  YoutubeOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
function Contactus() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [message, setmessage] = useState("");
  const fullName = firstName + " " + lastName;
  const MESSAGE = async (e) => {
    e.preventDefault();
    await auth
      .post("/contact", {
        name: fullName,
        email: email,
        phone: contact,
        mainMessage: message,
      })
      .then((res) => {
        // console.log(email,contact)
        // console.log(message)
        console.log(res.data);
        toast.success("thank for contacting us");
      })

      .catch((e) => {
        console.log(e);
        toast.error(e.response.data.msg);
      });
  };
  return (
    <>
      <div className="container-fluid   main-contact">
        <div className="google-map-code">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d108947.93545539168!2d73.02881655820312!3d31.424512000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1625938434652!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </div>
        </div>
       <div className="container-fluid inner_contact ">
        <div className="container  ">
          <div className="contact-heading">
            <h1 className="fs-3">Contact Us</h1>
            <h2 className="mt-3">
              Any question or remarks? just write us a message
            </h2>
          </div>
          <div className="inner_container  mt-5">
          <div className="row">
            <div className="col-md-5">
              <div className=" left-contact">
                <h1 className="fs-3 m-auto text-white">Contact Information</h1>
                <div style={{ marginTop: "20px", color: "white" }}>
                  Fill up the form and our Team will get back to you within 24
                  hourse
                </div>
                <div className="contact-Link ">
                  <MailFilled className="contact-icon" /> innovativelearning461@gmail.com
                </div>
                <div className="contact-Link">
                  <EnvironmentFilled className="contact-icon" /> University Of
                  Agriculture Jail Road Fsd
                </div>
                <div className="contact-Link">
                  <PhoneFilled className="contact-icon" /> 014-11230-23
                </div>
                <div className="contact-social">
                  <a href="https://www.youtube.com" target="blank">
                    <YoutubeOutlined className="contact-social-icon" />
                  </a>
                  <a href="https://www.instagram.com" target="blank">
                    <InstagramOutlined className="contact-social-icon ms-2" />
                  </a>
                  <a href="https://www.facebook.com" target="blank">
                    <FacebookOutlined className="contact-social-icon ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="right-contact">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <label className="contact_label">First Name:</label>
                      <Input
                        size="large"
                        placeholder="First Name"
                        className="contact_input"
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="contact_label">Last Name:</label>
                      <Input
                        size="large"
                        placeholder="Last Name"
                        className="contact_input"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label className="contact_label">Email:</label>
                      <Input
                        size="large"
                        placeholder="Email"
                        className="contact_input"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="contact_label">Contact:</label>
                      <Input
                        size="large"
                        placeholder="phone"
                        className="contact_input"
                        value={contact}
                        onChange={(e) => setcontact(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <label className="contact_label">Message:</label>
                      <Input
                        size="large"
                        placeholder="Write your message here"
                        className="contact_input"
                        value={message}
                        onChange={(e) => setmessage(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="C_B">
                      <button className="contact-button" onClick={MESSAGE}>
                        Send Message
                      </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

    
    </>
  );
}
export default Contactus;
