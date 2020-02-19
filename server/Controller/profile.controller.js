const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
const Profile = mongoose.model('Profile');

module.exports.makeProfile = (req,res,next) =>{
    console.log("Inside Make Profile fn");
    var profile = new Profile();
    profile.emailAddress = req.body.emailAddress;
    profile.name = req.body.name;
    profile.country = req.body.country;
    profile.city = req.body.city;
    profile.description = req.body.description;
    profile.businessType = req.body.businessType;
    profile.save((err, doc) => {
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


module.exports.updateProfileById = (req,res,next) =>{

    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var profile = {
            name: req.body.name,
            country: req.body.country,
            city: req.body.city,
            description: req.body.description,
            businessType : req.body.businessType,
        };

        
        Profile.findByIdAndUpdate(req.params.id, { $set: profile }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Post Update :' + JSON.stringify(err, undefined, 2)); }
    });

}

module.exports.getProfileByEmail = (req,res,next) =>{

    var query = { emailAddress: req.params.emailAddress };
    Profile.findOne(query, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Post :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.deleteProfilebyemail = (req,res,next) =>{
    
    var query1 = {emailAddress : req.params.email};
   
    Profile.findOneAndDelete(query1, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Post Delete :' + JSON.stringify(err, undefined, 2)); }
    });

}



