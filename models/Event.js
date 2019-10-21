const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema ({
    name: String,
    location: String,
    description: String,
    date: Date, 
    attendies: []
});

module.exports = mongoose.model('Event', EventSchema)