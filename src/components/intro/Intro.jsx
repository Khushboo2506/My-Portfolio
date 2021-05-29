import "./intro.scss";
import {init} from "ityped";
import {useEffect,useRef} from 'react';

export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, { 
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ['Full Stack Developer', 'ML Developer'] });
  },[]);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/khushboo.png" alt="ProfilePic"/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Khushboo Singh</h1>
          <p id="text">An enthusiast who loves world-changing computer science technologies,</p><p id="text">and is dedicated to learning new things and languages.</p><br></br>
          <h3><span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png"/>
        </a>
      </div>
    </div>
  );
}
