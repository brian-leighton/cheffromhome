import React from 'react';

const SelectGroup = ({handleChange, label, options, size, placeholder, index, selected, section, rounded}) => {
    
    const renderOptions = (optionArr) => {
        let result = [];
        result.push(<option key={placeholder}>{placeholder}</option>);
        if(optionArr.length){
            for(let i = 0; i < optionArr.length; i++){
                result.push(
                    <option key={`${optionArr[i][0]}-${i}`} selected={optionArr[i][0] === selected ? "selected" : null}value={optionArr[i][0]}>{`${optionArr[i][1] || optionArr[i]}`}</option>
                )
            }
            return result;
        }
        for(let i = 0; i < optionArr; i++){result.push(<option key={i} value={i}>{i}</option>)}
        
        return result;
    }
    return(
        <React.Fragment>
        <select rounded={rounded} className={`input__select-group col-${size}`} onChange={(e) => handleChange(e.target.value, label, section, index) }>
            {renderOptions(options)}
        </select>
        </React.Fragment>
    )
}
export default SelectGroup;