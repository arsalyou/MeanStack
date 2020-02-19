const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
const Post = mongoose.model('Post');

module.exports.makePost = (req,res,next) =>{
    console.log("Inside Make Post fn");
    var post = new Post();
    post.user=req.body.user;
    post.title = req.body.title;
    post.description = req.body.description;
    post.amount = req.body.amount;
    post.date = req.body.date;
    post.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
            }
    });
}


module.exports.retrievePost = (req,res,next) =>{
    Post.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Post :' + JSON.stringify(err, undefined, 2)); }
    });
}


module.exports.getPostById = (req,res,next) =>{

    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Post.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Post :' + JSON.stringify(err, undefined, 2)); }
    });

}

module.exports.getPostByName = (req,res,next) =>{

    var query = {user : req.params.user};
    Post.find(query, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Post :' + JSON.stringify(err, undefined, 2)); }
    });

}

module.exports.getPostByUser = (req,res,next) =>{

    var query = {user : req.params.user};
    Post.find(query, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Post :' + JSON.stringify(err, undefined, 2)); }
    });

}

module.exports.updatePostById = (req,res,next) =>{

    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var post = {
            user: req.body.user,
            title: req.body.title,
            description: req.body.description,
            amount: req.body.amount,
            date: req.body.date,
        };

        
        Post.findByIdAndUpdate(req.params.id, { $set: post }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Post Update :' + JSON.stringify(err, undefined, 2)); }
    });

}


    module.exports.deletePostById = (req,res,next) =>{
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).send(`No record with given id : ${req.params.id}`);
        }


        Post.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in Post Delete :' + JSON.stringify(err, undefined, 2)); }
        });

}




