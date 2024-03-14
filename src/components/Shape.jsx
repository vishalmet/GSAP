import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Shape = () => {
  const box = useRef();
  const box1 = useRef();
  const circle = useRef();
  const circle1 = useRef();

  useGSAP(() => {
    gsap.to(box.current, { x: 550  });
    gsap.to(box.current, { y: 200 });
    gsap.to(box.current, {rotation: "+=360", duration:1 });
   
    gsap.to(box1.current, { x: 50 });
    gsap.to(box1.current, { y: 50 });
    gsap.to(box1.current, {rotation: "+=360", duration:3});
   
    gsap.to(circle.current, { x: -20 });
    gsap.to(circle.current, { y: 80 });
    gsap.to(circle.current, { rotation: "+=360", transformOrigin: "50% 50%", duration: 6 });
    
  });

  return (
    <div className="">
        <div className=" flex justify-center items-center" ref={box} style={{ width: "300px", height: "300px", background: "red" }}>
        <div className=" flex justify-center items-center" ref={box1} style={{ width: "200px", height: "200px", background: "yellow" }}> </div>
        <div className="">
        <svg width="250" height="250">
            <g ref={circle}>
                <circle cx="50" cy="50" r="30" fill="blue" />
                <text x="50" y="55" textAnchor="middle" fill="white" fontSize="12">Hello</text>
            </g>
        </svg>
        </div>      
        </div>
    </div>
  );
};

export default Shape;