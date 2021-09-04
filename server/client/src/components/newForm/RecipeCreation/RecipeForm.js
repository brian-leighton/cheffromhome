import IngredientInput from "../Inputs/IngredientInput";

const RecipeForm = ({handleInput, recipe, inputTotal, deleteInput, addInput}) => {
    const renderIngredientInputs = (total) => {
        let result = [];
            for(let i = 0; i < total; i++){
                result.push(<IngredientInput index={i} key={i} handleInput={handleInput} value={recipe.ingredients[i]} deleteIngredient={deleteInput}/>);
            }
        return result;
    }
    return <form className="form__recipe">
                <div className="col-12">
                    <h1 className="form__header form__header--secondary">Ingredients</h1>
                </div>
                <div className="form__recipe-ingredients" >
                    <div className="col-12 flex flex__justify--end u-margin-bottom-medium">
                        <div className="form__recipe--controls" onClick={addInput}>Add Ingredient</div>
                </div>
                   {renderIngredientInputs(inputTotal)}
                </div>
            </form>
}
export default RecipeForm;