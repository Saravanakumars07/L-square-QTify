import React from "react";
import logo from '../../assets/logo.png';
import styles from "./Logo.module.css";

function Logo(){
  return (
    <div className={styles.logoWrapper} >
      <img src={logo} alt="logo" className={styles.logo} />
    </div>
  );
}

export default Logo;