const db = require('../models');

const eventList = require('./classes.json');

// removes all pokemon 
db.Event.remove({}, () => {
	// loops through the json file
	eventList.forEach(event => {
		// for each one creates a pokemon entry in the DB
		db.Event.create(event, (error, createdEvent) => {
			if (error) return console.log(error);
			console.log(createdEvent);
		});
	});
});