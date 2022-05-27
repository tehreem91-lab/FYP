import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Tutorsearch from '../Components/findtutor/tutorsearch';
function FindTutor()
{
    return(
        <>
         <Navbar/>
            <Tutorsearch/>
            <Footer/>
        </>

    );

}
export default FindTutor;