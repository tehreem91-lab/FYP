import React from "react"
import './detail.css'
import {DownloadOutlined} from '@ant-design/icons'
 import { useParams } from "react-router-dom"
 import { useLocation } from "react-router-dom"
const Detail =()=>

{
     const {name} = useParams()
     const {state} = useLocation()
    return(
        <>
        
        <div className="fluid-container detail-container">
            <div className="container  rounded bg-white  detail-inner">
            <div className="main-detail ">
            <div className="row">
               <div className="col-md-6 left-img"> <img  src={state[0]} alt='abc' style={{width:'40%', height:'95%',margin:'auto'}}/></div> 
               <div className="col-md-6 right-text book-detail">
               <h3 className="text-warning fs-3">{name}</h3>
               <h4 className="mt-2">by {state[1]}</h4>
               <h6>Acadmic Year: {state[2]}</h6>
               <h6>Downloads: {state[3]}</h6>
               {/* <button className="bg-warning mt-3"><a href={state[4]} rel="no refrence" target='blank'>Read Online</a></button> */}
             <a href={state[4]} rel="no refrence"  target='blank'><button className="bg-warning bttn" style={{marginTop:'10%'}}>Download text Book <DownloadOutlined  className="download" /></button></a>
             <a href={state[5]} rel="no refrence"  target='blank'><button className="bg-warning bttn" style={{marginTop:'3%'}}>Download text Book <DownloadOutlined className="download"/></button></a>
             

               </div>
            </div>           
            </div>
            </div>
        </div>


        
        </>
    )
}
export default Detail