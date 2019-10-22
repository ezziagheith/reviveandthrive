const bcrypt = require ('bcryptjs');
const db = require('../models');


const showEvent = (req, res) => {
  db.Event.find({}, (err, allEvent) => {
    if (err)  return res.status(500).json({
      status: 500,
      error: [{message: 'Something went wrong! Please try again'}],
    });
    
    res.json({
      status: 200,
      count: allEvent.length,
      data: allEvent,
      requestedAt: new Date().toLocaleString(),
    });
  });
};




const createEvent = (req, res) => {
  db.Event.findOne(req.body, (err, foundEvent) =>{
      if (err) return res.status(500).json({
          status: 500,
          error: [{message: 'Something went wrong! Please try again'}],
      });

      if (foundEvent) return res.status(400).json({
          status: 400,
          error: [{message: 'Invalid Request. Please try again'}]
      });
     
        db.Event.create(req.body, (err, createdEvent) =>{
              if (err) return res.status(500).json({
                  status: 500,
                  error: [{message: 'Something went wrong. Please try again'}]
              });

              res.status(201).json({
                  status: 201,
                  count: 1,
                  data: createdEvent,
                  requestedAt: new Date().toLocaleString(),
              });
          });
      });
  };



module.exports = {
 showEvent,
 createEvent,
}