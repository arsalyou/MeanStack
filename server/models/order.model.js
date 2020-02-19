const mongoose = require('mongoose');


var orderSchema = new mongoose.Schema({
    post_id: {
        type: String,
        required: 'this can\'t be empty'
    },
    name: {
        type: String,
        required: 'name can\'t be empty'
    },
    address: {
        type: String,
        required: 'address can\'t be empty'
    },
    phoneno: {
        type: String,
        required: 'phoneno can\'t be empty'
    }
});


mongoose.model('Order', orderSchema);