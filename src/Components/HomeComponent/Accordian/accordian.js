import React from "react";
import "./accordian.css";
import { Accordion } from "react-bootstrap";
import { AcoordianDetail } from "../../../utils/acoordiandetail";
// import MyAccordian from "./MyAccordians";
const Accordian = () => {
  // const [show, setShow] = useState(false);
  return (
    <div>
      <div className="container-fluid">
        <h1 className="faq fs-1 text-center">FAQs</h1>
        <p className="text-center text-warning">
          View the frequently asked question below{" "}
        </p>
        <div className="container">
          <div className="main_accordian">
            {AcoordianDetail.map((item) => {
              return (
                <>
                  <Accordion>
                    <Accordion.Item eventKey="0" className="mt-3 bg-light">
                      <Accordion.Header  >{item.question}</Accordion.Header>
                      <Accordion.Body>{item.answer}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
