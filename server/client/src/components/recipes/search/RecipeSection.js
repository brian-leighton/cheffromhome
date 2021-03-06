import React from "react";
import About from '../sections/about/About';
import Recipe from '../sections/recipe/Recipe';
import Discussion from '../sections/discussion/Discussion';

const RecipeSection = props => {
    const renderRecipe = (section) => {
        switch(section){
            case "about":
                return <About/>;
            case "recipe": 
                return <Recipe/>;
            case "discussion":
                return <Discussion/>;
            default:
                return;
        }
    }
    return(
        <React.Fragment>
            {renderRecipe(props.section)}
        </React.Fragment>
    )
}

export default RecipeSection;