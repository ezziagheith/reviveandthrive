const bcrypt = require('bcryptjs');
const db = require('../models');


// show all user
const showUsers = (req, res) => {
  db.User.find({}, (err, allUsers) => {
    if (err)  return res.status(500).json({
      status: 500,
      error: [{message: 'Something went wrong! Please try again'}],
    });
    
    res.json({
      status: 200,
      count: allUsers.length,
      data: allUsers,
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
     
      // us bcrypt
      bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.status(500).json({
          status: 500,
          error: [{message: 'Something went wrong. Please try again'}],
        });


        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) return res.status(500).json({
            status: 500,
            error: [{message: 'Something went wrong. Please try again'}],
          })


          const newUser = {
            firstName: req.body.firstName,
            email: req.body.email,
            password: hash,
          }
    
            db.User.create(newUser, (err, createdUser) =>{
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
      });
    });
  };


  // Post Login

  const createSession = (req, res) => {
    db.User.findOne({email: req.body.email}, (err, foundUser) =>{
        if (err) return res.status(500).json({
            status: 500,
            error: [{ message: 'Uh oh something went wrong. Please try again'}],
        });
  
        if(!foundUser) return res.status(400).json({
            status: 400,
            error: [{message: 'Username or password is incorrect'}],
        });
        bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
            if (err) return res.status(500).json({
                status: 500,
                error: [{message: 'Uh oh, something went wrong. Please try again'}],
            });
  
            if (isMatch) {
                req.session.currentUser = foundUser._id;
                return res.status(201).json({
                    status: 201,
                    data: {id: foundUser._id},
                });
            } else {
                return res.status(400).json({
                    status: 400,
                    error: [{message: 'Username or password is incorrect'}],
                })
            }
        })
    })
  }



// Update user
const updateUser = (req, res) => {
  db.User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}, (error, updatedUser) => {
      if (error) return console.log(error);

      res.json({
        status: 200,
        count: 1,
        data: updatedUser,
        requestedAt: new Date().toLocaleString()
      });
    });
}

// Destroy user
const destroy = (req, res) => {
  db.User.findByIdAndDelete(
    req.params.id, (err, destroyEvent) =>{
      if (err) return console.log(error);
      res.json({
        status:200,
        count: 1,
        data: destroyEvent,
        requestedAt: new Date().toLocaleString(),
      })
    }
  )
}




module.exports = {
  showUsers,
  createUser,
  createSession,
  updateUser,
  destroy,
}