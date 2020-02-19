
const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
const Spam = mongoose.model('Spam');

module.exports.SubmitSpamReport = (req,res,next) =>{
    console.log("Inside Make Post fn");
    var spam = new Spam();
    spam.user=req.body.user;
    spam.description = req.body.description;
    spam.save((err, doc) => {
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

module.exports.retrieveSpamReports = (req,res,next) =>{
    Spam.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Post :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.deleteSpambyemail = (req,res,next) =>{
    
    var query = {user : req.params.user};
   
    Spam.deleteMany(query, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Post Delete :' + JSON.stringify(err, undefined, 2)); }
    });

}