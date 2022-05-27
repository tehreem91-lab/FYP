import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Contactus from '../Components/ContactComponent/contact';
 import Footer from '../Components/Footer/Footer'
function Contact()
{
    return(
        <>
         <Navbar/>
        <Contactus/>
        <div className='mt-5'>
        <Footer />
        </div>
        </>

    );

}
export default Contact;