const IngredientTextInput = ({label, handleInput, index, value, size, section, styleOpt}) => {
    return (
        <div className={`input__locked-label col-${size}`} styleopt={styleOpt} type={label}>
            <span>{label.charAt(0).toUpperCase() + label.slice(1)}</span>
            <input type="text" onChange={(e) => handleInput(e.target.value, label, section, index)} value={value}/>
        </div>
    )
}

export default IngredientTextInput;