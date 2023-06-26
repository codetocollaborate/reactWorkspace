import React, { useEffect, useState } from "react";
import "./QuestionContainer.css";

const QuestionContainer = (props) => {

  return (
    <div className="question-container">
        <h3 className="question-text">{props.children}</h3> 
    </div>
  );
};

export default QuestionContainer;
