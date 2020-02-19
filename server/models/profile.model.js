const mongoose = require('mongoose');


var profileSchema = new mongoose.Schema({
    emailAddress: {
        type: String,
        required: 'email can\'t be empty',
        unique:true
    },
    name: {
        type: String,
        required: 'name can\'t be empty'
    },
    country: {
        type: String,
        required: 'country can\'t be empty'
    },
    city: {
        type: String,
        required: 'city can\'t be empty'
    },
    description: {
        type: String,
        required: 'description can\'t be empty'
    },
    businessType: {
        type: String,
        required: 'Business Type can\'t be empty'
    },
});

profileSchema.path('emailAddress').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');


mongoose.model('Profile', profileSchema);