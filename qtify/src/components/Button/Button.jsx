import React from "react";

import styles from "./Button.module.css";

 function Button ({ children, onclick,type = "botton" , variant}){
    const buttonClass = variant === "feedback" ? styles.feedbackbutton : styles.button;

    return (
        <button className = {buttonClass} type = {type} onClick = {onclick}>
            {children}
        </button>
    );
}

export default Button;