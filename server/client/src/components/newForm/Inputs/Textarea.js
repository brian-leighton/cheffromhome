const Textarea = ({label, handleInput, inputValue, instruction, size, height, section}) => {
    return (
        <div className={`input__textarea col-${size}`}>
            <textarea id={label}
                      rows={height}
                      value={inputValue}
                      onChange={(e) => handleInput(e.target.value, label, section)}
                      placeholder=""/>
            <label htmlFor={label}>{instruction}</label>
        </div>
    )
}

export default Textarea;