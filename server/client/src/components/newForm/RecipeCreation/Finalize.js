import React, {useState} from 'react';
import ShoppingListInput from '../Inputs/ShoppingListInput';
import PhotoInput from '../Inputs/PhotoInput';
import { submitRecipe } from '../../../actions';

const Finalize = ({handleInput, handlePhotoInput, submitRecipe, shoppingList, toggleShow, imgSrcData}) => {

    // const renderShoppingList = (list) => {
    //     let result = [];
    //     for(let type in list){
    //         let tempResult = [];
    //         console.log(list[type], type);
    //         if(list[type].length > 0){
    //             for(let i = 0; i < list[type].length; i++){
    //                 tempResult.push(<li key={i}>{list[type][i]}</li>)
    //             }
    //             result.push(<ol key={type}>
    //                             <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
    //                             {tempResult}
    //                         </ol>);
    //         }
    //     }
    //     result.push(<div key="list-parent" className="shopping-lists__edit">
    //                     {isEditingList ? <ShoppingListInput handleInput={handleInput}/> : <p>Did we miss anything?</p>}
    //                     <div className="shopping-lists__edit--btn" onClick={() => editList(!isEditingList)}>Add New Ingredient</div>  
    //                 </div>);
    //     return <div className="shopping-lists">{result}</div>;
    // }
    // const setSection = (forward) => {
    //     if(forward){
    //         currentSection === 1 ? changeSection(0) : changeSection(1)
    //     } else {
    //         currentSection === 0 ? changeSection(1) : changeSection(0);
    //     }
    // }
    return(
        <div className="modal__recipe-creation">
            <div className="finalize-recipe-controls__header">
                <h1 onClick={toggleShow}>Finally, add a picture to finalize your recipe!</h1>
            </div>
            <PhotoInput handleInput={handlePhotoInput} imgSrcData={imgSrcData}/>
            <div className="finalize-recipe-controls">
                <div className="finalize-recipe-controls__button finalize-recipe-controls__button--decline" onClick={toggleShow}>Back</div>
                <div className="finalize-recipe-controls__button finalize-recipe-controls__button--accept" onClick={submitRecipe}>Submit</div>
                {/* ERROR MESSAGE HANDLING */}
            </div>
        </div>
    )
}

export default Finalize;