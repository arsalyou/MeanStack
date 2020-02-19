const mongoose = require('mongoose');


var spamSchema = new mongoose.Schema({
    user: {
        type: String,
        required: 'email can\'t be empty'
    },
    description: {
        type: String,
        required: 'description can\'t be empty'
    }
});


mongoose.model('Spam', spamSchema);