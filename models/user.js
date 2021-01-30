const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    }, password: {
        type: String,
        required: true
    }, registerAt: {
        type: String,
        required: true
    }
}, { collection: 'user' });

module.exports = mongoose.model('User', userSchema);