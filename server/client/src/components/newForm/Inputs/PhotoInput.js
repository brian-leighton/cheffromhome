import React from 'react';

const PhotoInput = ({handleInput, imgSrcData}) => {
    return(
        <div>
            <img src={imgSrcData}></img>
            <input type="file" onChange={(e) => handleInput(e, "src")}>         
            </input>
            <input type="text" onChange={(e) => handleInput(e, "alt")}></input>
        </div>
    )
}

export default PhotoInput;