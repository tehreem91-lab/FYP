import React,{useState} from 'react';

const MyAccordian = ({question,answer}) => {

    const [show,setShow] = useState(false)
    return (
        <div>
            <div className="accordian_question">
                  
                  <h1>{question}</h1>
                  <p onClick={() => setShow(!show)} className="symbol" >{ show ? "➖":"➕"}</p>
                </div>
                {show && <p className="accordian_answer">{answer}</p>}
        </div>
    );
}

export default MyAccordian;
