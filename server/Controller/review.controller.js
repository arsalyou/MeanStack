const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
const Review = mongoose.model('Review');


module.exports.makeReview = (req,res,next) =>{
    console.log("Inside Make review fn");
    var review = new Review();
    review.user = req.body.user;
    review.description = req.body.description;
    review.rating = req.body.rating;
    review.save((err, doc) => {
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

module.exports.deleteReviewById = (req,res,next) =>{
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    }


    Review.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Post Delete :' + JSON.stringify(err, undefined, 2)); }
    });

}

module.exports.updateReviewById = (req,res,next) =>{

    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var review = {
            rating: req.body.rating
        };

        
        Review.findByIdAndUpdate(req.params.id, { $set: review }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Post Update :' + JSON.stringify(err, undefined, 2)); }
    });

}

module.exports.retrieveReviews = (req,res,next) =>{
    var query = {user : req.params.user};
    Review.find(query, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Post :' + JSON.stringify(err, undefined, 2)); }
    });
}