import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link} from "react-router-dom";
import { faYoutube,faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";
import FooterLogo from '../../Assests/FooterLogo.png'
import {PhoneFilled, MailFilled,EnvironmentFilled} from '@ant-design/icons'
import './Footer.css'
const Footer =()=>
{
    
 return(
        <>
        <div className='container-fluid back-footer'>
        <div className='container '>
            <div className='row'>
                <div className='col-md-3 footer_image '><img src={FooterLogo} alt="" className=' ' /> </div>
                <div className='col-md-2 '>
                <div className='footer_text'>
                <h5 className='head'>Quick LInks</h5> 
               <h6  className='contact-link '><Link  to='/about' >About us </Link></h6> 
               <h6  className='contact-link '><Link to='/findtutor'>Find Tutor </Link></h6>
               <h6  className='contact-link'><Link to='/contact'   >Contact us </Link></h6>
               <h6  className='contact-link'><Link to ='/ourcourse'>Our Courses</Link></h6>
               </div>
                </div>
                <div className='col-md-4'>
                <div className='footer_text'>
                 <h5 className='head'>Our Contact</h5>
                 <h6 className='contact-link '><MailFilled className='contact-icon'/> innovativelearning461@gmail.com</h6>  
                 <h6  className='contact-link'><EnvironmentFilled className='contact-icon' /> University Of Agriculture Jail Road Fsd</h6>
                 <h6  className='contact-link'><PhoneFilled className='contact-icon' /> 014-11230-23</h6>
                 </div>
                 </div>
                 <div className='col-md-3'>
                 <div className='footer_text'>
                 <h5 className='head'>Follow Us On</h5>
                 <div className='social-container' >
                <a href="https://www.youtube.com" className="youtube social "><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                <a href="https://www.facebook.com" className="facebook social ms-2"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                <a href="https://www.twitter.com" className="twitter social ms-2"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                <a href="https://www.instagram.com" className="instagram social ms-2"> <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        {/* <div className='Container-fluid' style={{backgroundColor:'#0d355f'}}>
        gfiewtf
        </div> */}
        </>
    );
}
export default Footer