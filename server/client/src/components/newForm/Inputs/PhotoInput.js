import React from 'react';

const PhotoInput = ({handleInput, imgSrcData}) => {
    return(
        <div className="input__image">
            <img src={imgSrcData}></img>
            <div className="input__image--container">
                <div className="input__file-container">
                    <input type="file" id="imgInput" onChange={(e) => handleInput(e, "src")}></input>
                    <label htmlFor="imgInput">Select a photo</label>
                </div>
                <input type="text" placeholder="Describe your image"onChange={(e) => handleInput(e, "alt")}></input>
            </div>
        </div>
    )
}

export default PhotoInput;