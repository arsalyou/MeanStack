const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
const Order = mongoose.model('Order');

module.exports.makeOrder = (req,res,next) =>{
    console.log("Inside Make Post fn");
    var order= new Order();
    order.post_id=req.body.post_id;
    order.name = req.body.name;
    order.address = req.body.address;
    order.phoneno = req.body.phoneno;
    order.save((err, doc) => {
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