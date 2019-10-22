const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema ({
    name: String,
    time: String,
    location: String,
    description: String,
    date: Date, 
    attendies: []
});

const Event = mongoose.model('Event', EventSchema)
module.exports = Event;