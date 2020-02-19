const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
const Bid = mongoose.model('Bid');


module.exports.makebid = (req,res,next) =>{
    console.log("Inside Make bid fn");
    var bid = new Bid();
    bid.post_id=req.body.post_id;
    bid.amount = req.body.amount;
    bid.rank = req.body.rank;
    bid.email = req.body.email;
   
    bid.save((err, doc) => {
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

module.exports.getBidByPostId = (req,res,next) =>{

    var query = {post_id : req.params.post_id};
    Bid.find(query, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Bid :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.getBidByUser = (req,res,next) =>{

    var query = {email : req.params.email};
    Bid.find(query, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Bid :' + JSON.stringify(err, undefined, 2)); }
    });
}


module.exports.deleteBidById = (req,res,next) =>{
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    }


    Bid.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Post Delete :' + JSON.stringify(err, undefined, 2)); }
    });

}

module.exports.updateBidById = (req,res,next) =>{

    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var post = {
            amount: req.body.amount,
        };
        Bid.findByIdAndUpdate(req.params.id, { $set: post }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Post Update :' + JSON.stringify(err, undefined, 2)); }
    });

}



