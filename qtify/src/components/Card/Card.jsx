import React from "react";
import sytles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({album}){
return (
    <div className = {sytles.card}>
        <div className = {sytles.imageWrepper}>
            < img src = {album.image}
            alt = {album.title}
            className = {sytles.albumImage}/>

            < Chip label ={ album.link !== undefined ? `${album.links} Links` : 
            `${album.follows} Follows`}
            className = {sytles.chip}
            color = "primary"
            size = "small"
            
            />
        </div>
        <p className = {sytles.title}>{album.title}</p>
    </div>
);
}

export default Card;