import React from 'react';
import AboutForm from './RecipeCreation/AboutForm';
import RecipeForm from './RecipeCreation/RecipeForm';
import DirectionsForm from './RecipeCreation/DirectionsForm';
import TipsForm from './RecipeCreation/TipsForm';
import Finalize from './RecipeCreation/Finalize';
import TextInputAlt from './Inputs/TextInputAlt';
import SvgIcon from '../icons/SvgIcon';
import Modal from '../modal/Modal';

class FormParent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ingredientsTotal: 4,
            directionsTotal: 3,
            tipsTotal: 3,
            finalizing: true,
            about: {
                title: "",
                cookTime: "",
                thumbnail: {},
                difficulty: "",
                description: "",
                shopping: {
                    meat: [],
                    vegetable: [],
                    dairy: [],
                    dry: []
                }
            },
            recipe:{
                directions: [""],
                yield: "",
                tips: [""],
                ingredients: [{name: "", quantity: "", unit: "", type: ""}, {name: "", quantity: "", unit: "", type: ""},{name: "", quantity: "", unit: "", type: ""},{name: "", quantity: "", unit: "", type: ""}],
            }
        }
    }

    handleInput = (value, target, section) => {
        this.setState(prevState => {
            return{
                [section]:{
                    ...prevState[section],
                    [target]: value,
                }
            }
        })
    }
    handleArrInput = (value, label, section, index) => {
        let sectionCopy = [...this.state[section][label]];
        // console.log(this.state[section][label]);
        sectionCopy[index || sectionCopy.length - 1] = value;
        console.log(label, section);
        this.setState({
            [section]:{
                ...this.state[section],
                [label]: sectionCopy
            }
        });
    }
    renderAltTextInput = (inputsTotal, label, section) => {
        let result = [];
        for(let i = 0; i < this.state[inputsTotal]; i++){
            result.push(
                <div className="u-relative" key={`${label}-${i}`}>
                    <div className="btn__remove-ingredient-alt" onClick={() => this.deleteInput(i, section, label, inputsTotal)}><SvgIcon icon="#icon-trash"/></div>
                    <TextInputAlt key={i} label={label} section={section} handleInput={this.handleArrInput} size="10" inputValue={this.state[section][label][i]} index={i}/>
                </div>
            )
        }
        return result;
    }
    handleIngredientInput = (e, key, section, index) => {
        let newState = this.state.recipe.ingredients;
        let target = {...this.state.recipe.ingredients[index]};
        target[key] = e;
        newState[index] = target;
        this.setState({
            "recipe": {
                    ...this.state.recipe,
                    ingredients: newState,
            }
        });
    }
    addToArrayTotal = (target) => {
        console.log(this.state[target]);
        this.setState({
            [target]: this.state[target] + 1,

        });
    }
    addIngredient = () => {
        console.log('here');
        this.setState({
            recipe: {
                ...this.state.recipe,
                ingredients: [...this.state.recipe.ingredients, {name: "", quantity: "", unit: "", type: ""}]
            },
            ingredientsTotal: this.state.ingredientsTotal + 1
        });
    }
    deleteInput = (index, section, key, totalVariableName) => {
        if(this.state[totalVariableName] <= 1) return;
        console.log(section);
        let updatedArr = [...this.state[section][key]];
        updatedArr.splice(index, 1);
        this.setState({
            [totalVariableName]: this.state[totalVariableName] - 1,
            [section]: {
                ...this.state[section],
                [key]: updatedArr
            }
        });
    }
    toggleShow = () => {
        this.setState({finalizing: !this.state.finalizing});
    }
    createShoppingList = (ingredients, callback) => {
        let result = {dry: [], dairy: [], vegetable: [], meat: []};
        ingredients.forEach(({name, type}) => {
            if(name && type){
                result[type] = [...result[type], name];
            }
        });
        callback(result, "shopping", "about");
    }
    handleShoppingInput = () => {

    }
// handle shopping list creation on recipe submission

    render(){
        return(
            <React.Fragment>
            <div className="form">
                <div className="col-12">
                    <h1 className="form__header form__header--primary">Recipe Creation</h1>
                </div>
                {/* <div className="col-12 flex flex__justify--center">
                    <div className="btn__form--submit" onClick={() => {this.toggleShow('finalizing'); this.createShoppingList(this.state.recipe.ingredients, this.handleInput)}}>Finalize</div>
                </div> */}
                    <AboutForm about={this.state.about} rYield={this.state.recipe.yield} handleInput={this.handleInput}/>
                    <RecipeForm recipe={this.state.recipe} handleInput={this.handleIngredientInput} inputTotal={this.state.ingredientsTotal} addInput={this.addIngredient} deleteInput={this.deleteInput}/>
                    <DirectionsForm renderInput={this.renderAltTextInput} addInput={this.addToArrayTotal} inputsTotal={this.state.directionsTotal}/>
                    <TipsForm renderInput={this.renderAltTextInput} addInput={this.addToArrayTotal} inputsTotal={this.state.tipsTotal}/>
                    {/* <div className="col-12" style={{fontSize: "2rem"}}>
                        <pre>
                        {JSON.stringify(this.state, null, 2)}
                        </pre>
                    </div> */}
                <div className="col-12 flex flex__justify--center">
                    <div className="btn__form--submit" onClick={() => {this.toggleShow('finalizing'); window.scrollTo(0,0); this.createShoppingList(this.state.recipe.ingredients, this.handleInput)}}>Finalize</div>
                </div>
            </div>
            {this.state.finalizing ? <Finalize handleInput={this.createShoppingList} shoppingList={this.state.about.shopping} toggleShow={this.toggleShow}/> : null}
            </React.Fragment>
        )
    }
}

export default FormParent;