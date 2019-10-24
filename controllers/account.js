const db = require('../models');


// show all user
const showAccount = (req, res) => {
  db.User.find({}, (err, allAccount) => {
    if (err)  return res.status(500).json({
      status: 500,
      error: [{message: 'Something went wrong! Please try again'}],
    });
    
    res.json({
      status: 200,
      count: allAccount.length,
      data: allAccount,
      requestedAt: new Date().toLocaleString(),
    });
  });
};

const getAccount = (req, res) =>{
  db.User.findById(req.params.id)
  .populate('events')
  .exec((err, foundAccount) =>{
    if (err) return res.status(500).json({
      status: 500,
      data: foundAccount,
      errir: [{message: 'Something went wrong. Please try again'}],
    })
    return res.status(200).json({
      status: 200,
      data: foundAccount,
  });
  })
}

const addEvent = (req,res) => {
  const event = req.body.event;
  db.User.findById(req.params.id, (err, foundUser) =>{
      if (err) return res.status(500).json({
          status: 500,
          error: [{message: 'Uh oh, something went wrong. Please try again'}],
      });
      foundUser.events.push(event);
      foundUser.save( (err, savedUser) =>{
          if (err) return res.status(500).json({
              status: 500,
              error: [{message: 'Uh oh, something went wrong. Please try again'}],
          });
          return res.status(201).json({
              status: 201,
              data: savedUser,
          });
      })
  });
}

const destroy = (req, res) =>{
  db.User.findById(req.session.currentUser, (err, foundUser)=>{
    console.log(req.params.id);
    if(err) return res.status(500).json({
      status: 500,
      error: [{message: 'Uh oh, something went wrong. Please try again'}],
    });
    if (!foundUser) return res.status(404).json({
      status: 500,
      error: [{message: 'Uh oh, something went wrong. Please try again'}]
    })
    let filteredEvents = foundUser.events.filter(event=> event._id.toString() !== req.params.id);
    foundUser.events = filteredEvents;
    foundUser.save((err, savedUser) => {
      if(err) return res.status(500).json({
        status: 500,
        error: [{message: 'Uh oh, something went wrong. Please try again'}],
      });
      return res.status(201).json({
        status: 201,
        data: savedUser,
      })
    })
  })
}



module.exports = {
  showAccount,
  getAccount,
  addEvent,
  destroy
}