import Modal from "../../modal/Modal";
import React, {useState} from 'react';
import ShoppingListInput from '../Inputs/ShoppingListInput';

let tempShopping = {
    meat: ["ground beef", "pork chop", "chicken tit", "eyeball","ground beef", "pork chop", "chicken tit", "eyeball","ground beef", "pork chop", "chicken tit", "eyeball"],
    vegetable: ["carrot", "eggplant", "peach", "coconut"],
    dairy: ["creme anglais", "creme fraiche"],
    dry: ["wrapper", "oil"]
}

const Finalize = ({handleInput, shoppingList, toggleShow}) => {
    const [currentSection, changeSection] = useState(0);
    const [isEditingList, editList] = useState(false);

    const renderShoppingList = (list) => {
        let result = [];
        for(let type in list){
            let tempResult = [];
            console.log(list[type], type);
            if(list[type].length > 0){
                for(let i = 0; i < list[type].length; i++){
                    tempResult.push(<li key={i}>{list[type][i]}</li>)
                }
                result.push(<ol key={type}>
                                <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
                                {tempResult}
                            </ol>);
            }
        }
        result.push(<div key="list-parent" className="shopping-lists__edit">
                        {isEditingList ? <ShoppingListInput handleInput={handleInput}/> : <p>Did we miss anything?</p>}
                        <div className="shopping-lists__edit--btn" onClick={() => editList(!isEditingList)}>Add New Ingredient</div>  
                    </div>);
        return <div className="shopping-lists">{result}</div>;
    }
    const renderPictureInput = () => {

    }
    const renderSection = (currentSection) => {
        return currentSection === 0 ? renderShoppingList(shoppingList) : renderPictureInput()
    }
    const setSection = (forward) => {
        if(forward){
            currentSection === 1 ? changeSection(0) : changeSection(1)
        } else {
            currentSection === 0 ? changeSection(1) : changeSection(0);
        }
    }
    return(
        <div className="modal__recipe-creation">
            <div className="finalize-recipe-controls__header">
                <h1 onClick={toggleShow}>Just a couple more steps before your recipe is finished!</h1>
                {currentSection === 0 ?  <h2>Based on what you've told us already this is your recipes shopping list.</h2>: <h2>Finally, add a picture to show off the finished product.</h2>}
            </div>
            {renderSection(currentSection)}
            <div className="finalize-recipe-controls">
                <div className="finalize-recipe-controls__button finalize-recipe-controls__button--decline" onClick={setSection}>Back</div>
                {currentSection === 1 ? <div className="finalize-recipe-controls__button finalize-recipe-controls__button--accept">Submit</div> : <div className="finalize-recipe-controls__button finalize-recipe-controls__button--accept" onClick={() => setSection(true)}>Add Picture</div>}
            </div>
        </div>
    )
}

export default Finalize;