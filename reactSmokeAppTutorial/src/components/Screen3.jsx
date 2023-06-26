import React, { useEffect, useState } from "react";
import QuestionContainer from "./QuestionContainer";
import "./Screen3.css";
import { useNavigate, useLocation } from "react-router-dom";
import { questions } from "./questionObject";

const Screen3 = () => {
  const [questionNo, setquestionNo] = useState(0);
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const onClickStart = () => {
    setquestionNo(questionNo + 1);
    navigate('/screen4', {state: {startExpress: true, questionNo: questionNo + 1}});
  }

  useEffect(() => {
    console.log('questionNo', location?.state);
    setquestionNo(location?.state?.questionNo || 0);
  }, []);

  return (
    <div className="screen">
        {(questionNo === 0) && <h3 className="survey-note">Start Survey</h3>}
        <div>
            <QuestionContainer>{questions[questionNo]}</QuestionContainer>
        </div>
        <div className="startButtons">
            <button onClick={onClickStart} className="button">0-5</button>
            <button onClick={onClickStart} className="button">5-10</button>
            <button onClick={onClickStart} className="button">10-15</button>
        </div>
    </div>
  );
};

export default Screen3;
