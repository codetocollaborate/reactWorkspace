import React from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";

const PrevButton = ({prev, screenState}) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(prev, screenState);
  }
  return (
    <div>
        <button onClick={onClickHandler} className="button">
         <div className="arrow-left"></div>
        </button>
    </div>
  );
};

export default PrevButton;
