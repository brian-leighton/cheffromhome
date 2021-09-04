import React from 'react';

const Input = ({handleInput, characterLimit, value}) => {
    const inputStyle = {
        fontFamily: "inherit",
        fontSize: "1.6rem",
        position: "absolute",
        verticalAlign: "top",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "white",
        resize: "none",
    }
    const preWhite = {
        whiteSpace: "pre",
        fontSize: "1.8rem",
        overflow: "hidden",
        wordBreak: "break-all",
        background: "green",
        color: "transparent",
    }
    const label = {
        display: "inline-block",
        position: "relative",
        minWidth: "100%",
        maxWidth: "65rem",
        minHeight: "1.4em",
    }
    
    return (
        <label style={label}>
            <span style={preWhite}>{value}</span>
            <textarea style={inputStyle} resize="none" value={value} onChange={(e) => handleInput(e.target.value)}></textarea>
        </label>
    )
}
export default Input;