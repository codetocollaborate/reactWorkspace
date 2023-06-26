import React, { useState } from "react";
import "./Screen2.css";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

const Screen2 = () => {

  const [start, setStart] = useState(false);

  const onStartClick = () => {
    setStart(true);
  }

  return (
    <div className="screen-2">
          <h3 className="survey-note">Here's a tutorial for you!!</h3>
         <h3 className="survey-note">First let's begin with a few questions</h3>
         { !start && <button className="start-button" onClick={onStartClick}>Start</button>}
         <div className="next-buttons">
            <PrevButton prev={'/'}/>  
            <NextButton next={'/screen3'}/>   
        </div>
    </div>
  );
};

export default Screen2;
