import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

const NextButton = ({next, screenState}) => {
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate(next, screenState);
        console.log("Next Button Clicked", next, screenState);
    }
    return (
        <div>
            <button onClick={onClickHandler} className="button">
            <div className="arrow-right"></div>
            </button>
        </div>
    );
};

export default NextButton;
