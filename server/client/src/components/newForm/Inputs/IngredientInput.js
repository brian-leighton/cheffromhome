import IngredientTextInput from "./IngredientTextInput";
import SelectGroup from "./SelectGroup";
import SvgIcon from "../../icons/SvgIcon";

const IngredientInput = ({index, handleInput, deleteIngredient, value, style}) => {
    const foodTypes = [["meat", "Meat"], ["vegetable", "Vegetable"], ["dairy", "Dairy"], ["dry", "Dry"]];
    return (
        <div className="input__ingredient" key={index}>
            <IngredientTextInput  index={index} handleInput={handleInput} value={value.name} label="name" size="4"/>
            <IngredientTextInput  index={index} handleInput={handleInput} value={value.quantity} label="quantity" size="2" styleOpt="ingqty"/>
            <IngredientTextInput  index={index} handleInput={handleInput} value={value.unit} label="unit" size="2" styleOpt="ingqty"/>
            <SelectGroup  label="type" size="2" placeholder="Type" options={foodTypes} key={index} selected={value.type} handleChange={handleInput} index={index}/>
            <div className="btn__remove-ingredient col-1" onClick={() => deleteIngredient(index, "recipe", "ingredients", "ingredientsTotal")}><SvgIcon icon="#icon-trash"/></div>
            
        </div>
    )
}

export default IngredientInput;