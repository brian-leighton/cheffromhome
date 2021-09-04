import SelectGroup from "./SelectGroup";
import React, {useState} from 'react';

const ShoppingListInput = ({handleInput, shoppingList}) => {
    const [errorMsg, setErrorMsg] = useState("");
    const [ingredient, setIngredientValue] = useState({name: "", type: ""})
    
    const handleShoppingInput = (value, section, callback) => {
        if(!section || (!section && !ingredient.type)) return setErrorMsg("You must choose a section");
        let ingCopy = {...ingredient};
        ingCopy[section] = value;
        setIngredientValue(ingCopy);
    }
    const foodTypes = [["meat", "Meat"], ["vegetable", "Vegetable"], ["dairy", "Dairy"], ["dry", "Dry"]];
        console.log(ingredient);
    return <form className="input__shopping-list">
                <div className="input__locked-label col-8">
                    <span>Ingredient Name</span>
                    <input type="text" onChange={(e) => {handleShoppingInput(e.target.value, "name")}} />
                </div>
                <SelectGroup options={foodTypes} label={"type"} handleChange={handleShoppingInput}/>
                {errorMsg ? <h1>{errorMsg}</h1> : null}
            </form>
}

export default ShoppingListInput;