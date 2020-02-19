const mongoose = require('mongoose');


var postSchema = new mongoose.Schema({
    user: {
        type: String,
        required: 'user can\'t be empty'
    },
    title: {
        type: String,
        required: 'title can\'t be empty'
    },
    description: {
        type: String,
        required: 'description can\'t be empty'
    },
    amount: {
        type: String,
        required: 'amount can\'t be empty'
    },
    date: {
        type: String,
        required: 'date can\'t be empty'
    }
});


mongoose.model('Post', postSchema);

