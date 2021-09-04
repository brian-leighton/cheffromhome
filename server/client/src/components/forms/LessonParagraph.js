import React from 'react';
const LessonParagraphInput = ({onTextChange, index,section,keyName, isIteratable, value}) => {
    const renderInput = (keyName) => {
        if(keyName === 'paragraphs' || keyName === "directions" || keyName === "tips"){
            return (
            <React.Fragment>
                <label className="input__container--header">{keyName.charAt(0).toUpperCase() + keyName.slice(1)}</label>
                <textarea className="input__text" type="text" value={value} onChange={(e) => onTextChange(e, index, section, keyName, isIteratable)}/>
            </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <input id={keyName} className={`input__text input__text--${keyName}`} type="text" value={value} onChange={(e) => onTextChange(e, index, section, keyName, isIteratable)}/>
                    <label for={keyName} className="input__container--header">{keyName.charAt(0).toUpperCase() + keyName.slice(1)}</label>
                </React.Fragment>
            )
        }
    }
    return (
        <React.Fragment>
            {renderInput(keyName)}
        </React.Fragment>
    )
}
export default LessonParagraphInput;