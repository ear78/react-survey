const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String
})

//create model class with mongoose
mongoose.model('users', userSchema);
