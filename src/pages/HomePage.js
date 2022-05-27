import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import CarouselContainer from '../Components/HomeComponent/carousel/CarouselContainer';
import Introduction from '../Components/HomeComponent/introduction/introduction';
import Subject from '../Components/HomeComponent/carousel/subjectchart/subject';
import Counter from '../Components/HomeComponent/counter/counter';
import Testimonial from '../Components/HomeComponent/Testimonial/Testimonial';
import Feedback from '../Components/HomeComponent/Feedback/feedback';
import  Accordian from '../Components/HomeComponent/Accordian/accordian';
 import Footer from '../Components/Footer/Footer';

function Home()
{
    return(
        <>
       
         <Navbar/>
         <CarouselContainer/> 
         <Introduction/>
         <Subject/>
         <Counter/>
         <Feedback/>
         <Testimonial/>
          <Accordian/>
         <Footer/>
         </>

    );

}
export default Home;