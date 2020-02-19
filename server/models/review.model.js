const mongoose = require('mongoose');


var reviewSchema = new mongoose.Schema({
    user: {
        type: String,
        required: 'user can\'t be empty'
    },
    description: {
        type: String,
        required: 'description can\'t be empty'
    },
    rating: {
        type: Number,
        required: 'rating can\'t be empty'
    }
});


mongoose.model('Review', reviewSchema);

