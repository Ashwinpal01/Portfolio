import React from 'react'
import './Homestyle.css';
import Me from "../../resume/src/assets/avatar-1.svg";
// import Social from './Social';


export default function Home() {
  return (
    <>



    {/* <Social></Social> */}
    <section className="home container" id="home">
       <div className="intro">
        <img src={Me} className='home_img' alt="" />
      <h1 className="home_name">Ashwin Ramkishor Pal</h1>
      <span className="home_education">I'm a Frontend developer</span>
       
        <div className="home_socials"> 
    <a href="" className='home_social-link' target='_blank'>
      <i className="fa-brands fa-instagram"></i>
    </a> </div>
    <a href='#about' className='btn'>Hire Me</a>
   
      <div className="scroll_down">
       <a href="#about" className='mouse_wrapper'>
       <span   className="home_scroll-name">Scroll Down</span>
       <span className="mouse">
        <span className="wheel"></span>
       </span></a>
        </div>
      </div>


      
      
      {/* <Shapes></Shapes> */}
         </section>
      </>
  )
}
