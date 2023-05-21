import React from 'react'
import './resume.css'
const Data = [
  {
    id: 1,
    category: "education",
    icon: "icon-graduation",
    year: "2019 - present",
    title: "Academic Degree",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 2,
    category: "education",
    icon: "icon-graduation",
    year: "2013 - 2017",
    title: "Bachelor's Degree",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 3,
    category: "education",
    icon: "icon-graduation",
    year: "2009 - 2013",
    title: "Honours Degree",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 4,
    category: "experience",
    icon: "icon-briefcase",
    year: "2019 - present",
    title: "Web Designer",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 5,
    category: "experience",
    icon: "icon-briefcase",
    year: "2013 - 2017",
    title: "Front-End Developer",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 6,
    category: "experience",
    icon: "icon-briefcase",
    year: "2009 - 2013",
    title: "Back-End Developer",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
];

const icon = ["icon-graduation", " icon-briefcase"];
const year = ["2021", " 2017","2015","2023 - Present"];
const title = [ "Back-End Developer","Front-End Developer","Academic Degree","Bachelor's Degree","Academic Degree"]
const text = ["Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto."]
    




export default function R() {
  return (
   <section className="resume container section " id='r'>
    <h2 className="section_title">Experience</h2>
  
     <div className="resume_container grid">
       <div className="timeline grid">
     <div className="timeline_item">
<i className="icon-graduation"></i>
<span className="timeline_date">{year[0]}</span>
<h3 className="timeline_title">{title[4]}</h3>
<p className="timeline_desc">Maulana Azad National Institute of 
Technology Bhopal,M.P.
B.Tech-Civil Engineering</p>
 
 
 </div>
     

 <div className="timeline_item">
<i className="icon-graduation"></i>
<span className="timeline_date">{year[1]}</span>
<h3 className="timeline_title">{title[3]}</h3>
<p className="timeline_desc">Macro Vision Academy, Burhanpur,M.P.
12th|CBSE</p>
 
 
 </div>


 <div className="timeline_item">
<i className="icon-graduation"></i>
<span className="timeline_date">{year[2]}</span>
<h3 className="timeline_title">{title[2]}</h3>
<p className="timeline_desc">K.V.O.F. Bhusawal,Maharashtra 
10th| CBSE</p>
 
 
 </div>
     
     

     
     
     
     
     
     
     
       </div>
     
      
       
       <div className="timeline grid">
     <div className="timeline_item">
<i className=" icon-briefcase"></i>
<span className="timeline_date">{year[3]}</span>
<h3 className="timeline_title">Profession</h3>
<p className="timeline_desc">{text[0]}</p>
 
 
 </div>
     
     
     
     
     
     
     
     
     
     
       </div>


     </div>


   </section>
  )
}
