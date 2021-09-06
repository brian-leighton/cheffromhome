const ObjectId = require('mongodb').ObjectID;
const mongoUtil = require('../utils/mongoUtil');
const Recipe = require("../models/Recipe");

module.exports = (app) => {
    mongoUtil.connect((err, client) => {
        var db = mongoUtil.getDb(),
         recipesCollection = "recipes",
         userCollection = "users";
        app.post("/recipes/new", async (req, res) => {
            console.log('ROUTE HIT');
            // console.log(req.body);
            const {about, recipe} = req.body.trimmedRecipe;
            const {author} = req.body;
            const recipeObj = {
                "author": req.body.author,
                "posted": new Date().toUTCString(),
                about,
                recipe}
            console.log(author);
        // console.log(req.body.recipe);           
            // const {
            //     basicInfo,
            //     about,
            //     recipe,
            //     beginner,
            //     shopping,
            //     photo,
            // } = req.body.recipe;
            // const author = { author: req.body.author.author, userid: req.body.author.userid};

            // const recipeObj = new Recipe({
            //     basicInfo,
            //     about,
            //     beginner,
            //     photo,
            //     recipe,
            //     author,
            //     posted: new Date().toUTCString()
            // });

            db.collection(recipesCollection).insertOne(recipeObj);
            db.collection(userCollection).updateOne({_id: ObjectId(author.userid)}, {$push: {recipes: recipeObj}});
            res.send();
        });

        app.get("/recipes/get", async (req, res) => {
            // console.log('RESPONSE:');
            try {
                const response = [];
                // res.send("hello");
                const recipes = await db.collection(recipesCollection).find({}).toArray();
                console.log(recipes);
                recipes.map((item) => {
                    // console.log(item.about.paragraphs[0], "here");
                    let snip = {
                        id: item._id,
                        title:item.about.title,
                        author: item.author.author,
                        description: item.about.description.slice(0, 144),
                        thumbnail: item.about.thumbnail
                    };
                    response.push(snip);
                });
                // console.log("HERE I AM");
                res.send(response);
            } catch(err){
                console.log("~*~*ERROR*~*~*", err);
                res.send(err);
            }
        });

        app.post("/recipes/get/:id", async (req, res) => {
            try{
                let recipe = await db.collection(recipesCollection).findOne({_id: ObjectId(req.params.id) });
                res.send(recipe);
            } catch(err){
                res.send();
            }
        });

        //Question & Answer posting routes
        app.post("/recipes/new/comment", async (req, res) => {
            let { author, question } = req.body.post.post;
            const post = {
                author,
                question,
                posted: new Date().toUTCString(),
                responses: [],
            }
        db.collection(recipesCollection)
            .findOneAndUpdate(
                {_id: ObjectId(req.body.post.recipeId)},
                {$push: {comments:{ _id: new ObjectId(), post}}},
                {returnOriginal: false},
                (err, document) => {
                    if(err) return err;
                    res.send(document.value);
                    }
                );
        });
        app.post("/recipes/new/response", async (req, res) => {
            let {id, user, response} = req.body.data;
            let info = {
                id: user._id,
                username: user.username,
                email: user.email,
            }
            const post = {id: new ObjectId(), info, response};

            let data = await db.collection("recipes").findOneAndUpdate(
                {"comments._id": ObjectId(id)},
                {$push: {"comments.$.post.responses": post}},
                {returnOriginal: false},
                (err, document) => {
                    console.log(document.value);
                    res.send(document.value);
                }
            )
        });

        app.post("/recipes/edit/response", async (req, res) => {
            let {commentId, responseId, response} = req.body.data;
            //mongodb Array filters OP OP
            let updatedResponse = await db.collection("recipes").findOneAndUpdate(
                    {"comments.post.responses.id": ObjectId("6094365cd1c4571d188ebca6")},
                    {$set: {"comments.$[i].post.responses.$[j].response": response}},
                    {returnOriginal: false, arrayFilters: [{"i._id": ObjectId(commentId)}, {"j.id": ObjectId(responseId)} ]},
                    (err, document) => {
                        res.send(document.value);
                    },
                );
        });

        app.post("/recipes/new/answer", async (req, res) => {
            
        });

        app.post("/recipes/new/answer", async (req, res) => {
            
        });

    });
}
