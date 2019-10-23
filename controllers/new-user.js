const db = require('../models');


// show all user
const showUsers = (req, res) => {
  db.User.find({}, (err, allUser) => {
    if (err)  return res.status(500).json({
      status: 500,
      error: [{message: 'Something went wrong! Please try again'}],
    });
    
    res.json({
      status: 200,
      count: allUser.length,
      data: allUser,
      requestedAt: new Date().toLocaleString(),
    });
  });
};

// Create User
const createUser = (req, res) => {
  db.User.findOne(req.body, (err, foundUser) =>{
      if (err) return res.status(500).json({
          status: 500,
          error: [{message: 'Something went wrong! Please try again'}],
      });

      if (foundUser) return res.status(400).json({
          status: 400,
          error: [{message: 'Invalid Request. Please try again'}]
      });
     
        db.User.create(req.body, (err, createdUser) =>{
              if (err) return res.status(500).json({
                  status: 500,
                  error: [{message: 'Something went wrong. Please try again'}]
              });

              res.status(201).json({
                  status: 201,
                  count: 1,
                  data: createdUser,
                  requestedAt: new Date().toLocaleString(),
              });
          });
      });
  };

module.exports = {
  showUsers,
  createUser,
}