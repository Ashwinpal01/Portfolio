import React from 'react'
import Image from "../../resume/src/assets/avatar-2.svg";
import './about.css'

export default function About() {
  return (
   <section className="about container section" id='about'>
   <h2 className="section_title">About Me</h2>
   <div className="about_container grid"> <img src={Image} alt="" className='about_img' />
   
   <div className="about_data grid">
 <div className="about_info">
 <p className="about_description">
I am Ashwin R. Pal , web developer from Nagpur 
Maharashtra . I am a freshers. I know website building and 
customization , I am also good at backend language 
like java along with frameworks such as spring 
and spring-boot</p>
<a href="" className="btn">Download CV</a>
 </div>
     
<div className="about_skills grid">
<div className="skills_data">
<div className="skills_title">
  <h3 className="skills_name">Development</h3>
  <span className="skills_number ">87%</span>
</div>
<div className="skills_bar">
  <span className="skills_per development">  </span>
</div>
</div>

<div className="skills_data">
<div className="skills_title">
  <h3 className="skills_name">Backend</h3>
  <span className="skills_number ">81%</span>
</div>
<div className="skills_bar">
  <span className="skills_per backend">  </span>
</div>
</div>


<div className="skills_data">
<div className="skills_title">
  <h3 className="skills_name">UI-UX</h3>
  <span className="skills_number ">87%</span>
</div>
<div className="skills_bar">
  <span className="skills_per uiux">  </span>
</div>
</div>







</div>



   </div>
   
   
   
   
   
   
   </div>
   
    










  


















   </section>
  )
}





//    <section className="about container section" id='about'>
{/* <h2 className="section_title">About Me</h2>
<div className="about_container grid" >
 <img src={Image} alt="" className='about_img' />

<div className="about_data grid">
   <div className="about_info">
<p className="about_description">
I am Ashwin R. Pal , web developer from Nagpur 
Maharashtra . I am a freshers i website building and 
customization , I am also good at backend language 
like java along with frameworks such as spring 
and spring-boot</p>
<a href="" className="btn">Download CV</a>
</div>

<div className="about_skills grid">
<div className="skills_data">
<div className="skills_title">
  <h3 className="skills_name">Development</h3>
  <span className="skills_number ">87%</span>
</div>
<div className="skills_bar">
  <span className="skills_per development">  </span>
</div>
</div>

<div className="skills_data">
<div className="skills_title">
  <h3 className="skills_name">Backend Java</h3>
  <span className="skills_number ">84%</span>
</div>
<div className="skills_bar">
  <span className="skills_per backend">  </span>
</div>

<div className="skills_data">
<div className="skills_title">
  <h3 className="skills_name">Backend Java</h3>
  <span className="skills_number ">84%</span>
</div>
<div className="skills_bar">
  <span className="skills_per backend">  </span>
</div>

</div>
</div>
</div>
</section> */}