import React, { useState, useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 }); 
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });    

  const gap = 40;     
  const speed = 0.15;   

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setDotPos((prev) => ({
        x: prev.x + (position.x - prev.x),
        y: prev.y + (position.y - prev.y - gap), 
      }));
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: `${dotPos.x}px`, top: `${dotPos.y}px` }}
      />
      <div
        className="cursor-ring"
        style={{ left: `${dotPos.x}px`, top: `${dotPos.y}px` }}
      />
    </>
  );
};

export default CustomCursor;