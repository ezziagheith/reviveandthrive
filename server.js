const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();
// Server Port 
const PORT = process.env.PORT;

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
  secret: 'This is a secret....',
  resave: false, 
  saveUninitialized: false, 
}))



// =================== End Points =================//

// Html routes
app.use('/', routes.views);

// API routes
app.use('/api/v1', routes.api);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));