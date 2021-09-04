import React from 'react';
import LessonParagraph from './LessonParagraph';
import SvgIcon from '../icons/SvgIcon';

const TextInput = ({section, keyName, isIteratable, onTextChange, paragraphCount, addNewInput, value}) => {
    const textHandy = (e) => {
        console.log(e.target.value);
    }
    const renderTextInput = () => {
        let inputs = [];
        if(isIteratable){
            for(let i = 0; i < paragraphCount; i++){
                inputs.push(<LessonParagraph
                                key={`${section}-${i}`}
                                section={section}
                                index={i}
                                keyName={keyName}
                                onTextChange={textHandy}
                                isIteratable={true}
                                value={value[keyName][i] || ''}
                />);
            }
            inputs.push(<div
                         key={`${section}-${keyName}`}
                         onClick={() => addNewInput(isIteratable)}
                         className={section === "shopping" ? "icon__container icon__container--shopping" : "icon__container icon__container--paragraph" }>
                            <SvgIcon icon={"#icon-add"} centered={true}/>
                        </div>);
        } else {
            inputs.push(
                <LessonParagraph
                    key={`${section}-${keyName}`}
                    section={section}
                    keyName={keyName}
                    onTextChange={onTextChange}
                    isIteratable={false}
                    value={value[keyName]}
                />
            )
        }
        return <React.Fragment>{inputs}</React.Fragment>;
    }

    return(
        <div className="input__container--text form__section--text">
            {renderTextInput()}
        </div>
    )
}
export default TextInput;