import "./projects.scss";
import { useState } from "react";

export default function Projects() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id:'1',
      icon:"./assets/mobile.png",
      title:"UI/UX Design",
      desc:"A design made for e-commerce website using Adobe XD",
      img:"./assets/xd.png",
    },
    {
      id:'2',
      icon:"./assets/globe.png",
      title:"Diabetic retinopathy App",
      desc:"It is ML based application which tells whether we are having iris defect or not, and also we can consult to doctor",
      img:"./assets/web2.jpeg",
    },
    {
      id:'3',
      icon:"./assets/writing.png",
      title:"Smart Attendance Application",
      desc:"It is advance attendance system using face detection, it has features like adding, checking and deleting students ",
      img:"./assets/web1.jpeg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="projects" id="projects">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map(d=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt=""/>
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt=""/>
            </div>
          </div>
          
        </div>))}
      </div>
      
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()}/>
    </div>
  )
}
