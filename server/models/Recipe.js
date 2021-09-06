const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredients = new Schema({
    name: String,
    quantity: String,
    unit: String,
    type: String
});

const photo = new Schema({
    src: String,
    alt: String
});

const comment = new Schema({
    id: String,
    author: String,
    question: String,
    posted: String,
    responses: [
        {
            user: Object,
            response: String,
            posted: String,
        }
            ]
    });



const recipeSchema = new Schema({
    author: {
        author: String,
        userid: String
    },
    posted: String,
    edited: {type: String, default: "n/a"},
    about: {
        title: String,
        cookTime: String,
        difficulty: String,
        description: String,
        thumbnail: photo,
        shopping:{
            meat: Array,
            vegetable: Array,
            dairy: Array,
            dry: Array,
        }
    },
    recipe: {
        directions:Array,
        yield: String,
        tips: Array,
        ingredients: [ingredients]
    },
    comments: [comment]
});

module.exports = mongoose.model('Recipe', recipeSchema, "recipes");