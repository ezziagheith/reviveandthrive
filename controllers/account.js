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
  db.User.findById(req.params.id, (err, foundAccount) =>{
    if (err) return res.status(500).json({
      status: 500,
      data: foundAccount,
      errir: [{message: 'Something went wrong. Please try again'}],
    })
  })
}



module.exports = {
  showAccount,
  getAccount,
  
}