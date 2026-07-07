import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="./" className={styles.logoLink}>
        <Logo />
      </Link>
      <Search placeholder="Search a song of your choice" searchData={searchData} />
      <Button variant="black">Give Feedback</Button>
    </nav>
  );
}

Navbar.propTypes = {
  searchData: PropTypes.func.isRequired,
};

export default Navbar;