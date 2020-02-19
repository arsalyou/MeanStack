const mongoose = require('mongoose');


var bidSchema = new mongoose.Schema({
    selleremail: {
        type: String,
        required: 'email can\'t be empty'
    },
    post_id: {
        type: String,
        required: 'post_id can\'t be empty'
    },
   
    amount: {
        type: String,
        required: 'amount can\'t be empty'
    },
    rank: {
        type: String,
        required: 'date can\'t be empty'
    }
});




mongoose.model('Bid', bidSchema);