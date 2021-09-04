import React from 'react';

const TextInput = ({section, label, inputValue, handleInput, size, index}) => {
    return(
        <div className={`input__floating-label col-${size}`}>
            <input type="text"
                    id={`${label}-index` || ''}
                    value={inputValue || ''}
                    onChange={(e) => handleInput(e.target.value, label, section, index)}
                    placeholder=""/>
            {label ? <label htmlFor={`${label}-index`}>{label.charAt(0).toUpperCase() + label.slice(1)}</label> : ""}
            
        </div>
    )
}

export default TextInput;