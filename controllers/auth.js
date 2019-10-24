const bcrypt = require ('bcryptjs');

const db = require('../models');

// Show all users
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



// POST Create User

const createUser = (req, res) => {
    db.User.findOne({ email: req.body.email}, (err, foundUser) =>{
        if (err) return res.status(500).json({
            status: 500,
            error: [{message: 'Uh oh, something went wrong! Please try again'}],
        });

        if (foundUser) return res.status(400).json({
            status: 400,
            error: [{message: 'Invalid Request. Please try again'}]
        });
        bcrypt.genSalt(10, (err, salt) =>{
            if (err) return res.status(500).json({
                status: 500,
                error: [{message: 'Uh oh, something went wrong! Please try again'}],
            });

            const newUser = {
                name: req.body.name,
                email: req.body.email,
                password: hash
            };

            db.User.create(newUser, (err, createdUser) =>{
                console.log(createdUser);
                if (err) return res.status(500).json({
                    status: 500,
                    error: [{message: 'Uh oh, something went wrong. Please try again'}]
                });

                res.status(201).json({
                    status: 201,
                    data: createdUser,
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
                    data: {id: foundUser._id, firstName: foundUser.firstName},
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

// Delete session -- logout 

const deleteSession = (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).json({
            status: 500,
            error: [{message: 'Uh oh, something went wrong. Please try again'}]});

        res.status(200).json({
            status: 200,
            message: 'Success',
        });
    });
}

// Post Verify Auth

const verifyAuth = (req, res) => {
    if (!req.session.currentUser) {
        return res.status(401).json({
            status: 401,
            error: [{message: 'Unauthorized. Please login and try again '}],
        });
    }
    res.status(200).json({
        status: 200,
        user: req.session.currentUser,
    });
}

// GET Show Profile

const showAccount = (req, res) =>{
    db.User.findById(req.params.userId, (err, foundAccount) =>{
        if (err) return res.status(500).json({
            status: 500,
            error: [{message: 'Uh oh, something went wrong. Please try again'}],
        });
    });
};



module.exports = {
    showUsers,
    createUser,
    createSession,
    deleteSession,
    verifyAuth,
    showAccount,
}