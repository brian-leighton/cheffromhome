import React from 'react';
import {connect} from 'react-redux';
import Forum from '../../../forum/Forum.js';

const Discussion = (props) => {
    return(
        <div className="recipe__content">
            <h1>Costing Coming Soon</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {comments: state.recipes.recipe.comments}
}

export default connect(mapStateToProps, null)(Discussion);