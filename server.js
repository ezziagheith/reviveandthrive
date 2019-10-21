const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');


// Server Port 
const PORT = process.env.PORT || 4000;

// Server App
const app = express();


const routes = require('./routes');



// ================= MIddleWare ================================//
// BodyParser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Serve Public Directory
app.use(express.static(__dirname + '/public'));

app.use(session({
  secret: 'Sssshhhhhh, this is a secret....',
  resave: false, // save session on every request
  saveUninitialized: false, // Only save session if session exists on req object.
}))


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));