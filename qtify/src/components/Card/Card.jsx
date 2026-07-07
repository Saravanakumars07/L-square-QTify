import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({album}){
 return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <img src={album.image} alt={album.name} className={styles.cardImage} />
        <div className={styles.imageOverlay}>
          <p className={styles.cardTitle}>{album.title}</p>
        </div>
      </div>
      <div className={styles.cardBottom}>
        <Chip 
          label={`${album.follows} Follows`} 
          className={styles.followsPill}
        />
      </div>
      <p className={styles.albumName}>{album.name}</p>
    </div>
  );
}

export default Card;