const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    events: [{
        type: Schema.Types.ObjectId,
       ref: 'Event',
    }],
});



const User = mongoose.model('User', UserSchema)
module.exports = User;

