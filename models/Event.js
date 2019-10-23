const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema ({
    className: String,
    teacherName: String,
    time: String,
    location: String,
    description: String,
    date: Date, 
    attendies: [{
        type: Schema.Types.ObjectId,
       ref: 'User',
    }]
});

const Event = mongoose.model('Event', EventSchema)
module.exports = Event;