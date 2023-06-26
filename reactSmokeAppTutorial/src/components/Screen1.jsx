import React, { useEffect, useState } from "react";
import "./Screen1.css";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

const Screen1 = () => {
  return (
    <div className="screen-1">
         <h2 className="welcome-note">Welcome to Stop smoking tutorial</h2>
         <h3 className="survey-note">we understand its difficult at start, but trust us, you will feel super relaxed later, and feel proud of yourself</h3>
         <div className="emoji">
          <span role="img" aria-label="Face with Joy">😊</span>
        </div>
         <div className="next-buttons">
            <PrevButton prev={'/'}/>  
            <NextButton next={'/screen2'}/>   
        </div>
    </div>
  );
};

export default Screen1;
