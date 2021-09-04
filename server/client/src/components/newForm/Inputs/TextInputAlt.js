const TextInputAlt = ({section, label, inputValue, handleInput, size, index}) => {
    return(
        <div className={`input__locked-label`}>
            <span>{index+1}</span>
            <input type="text"
                    
                    id={`${label}-${index}` || ''}
                    value={inputValue || ''}
                    onChange={(e) => handleInput(e.target.value, label, section, index)}
                    />
            {/* {label ? <label htmlFor={`${label}-${index}`}>{label.charAt(0).toUpperCase() + label.slice(1)}</label> : ""}           */}
        </div>
    )
}

export default TextInputAlt;