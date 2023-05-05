require('dotenv').config();
require('./config/database');
const cors=require('cors');

const bodyParser = require ('body-parser');

const express = require('express');
const path = require('path'); // node module
const favicon = require('serve-favicon');
const logger = require('morgan');


const app = express();

const PORT = process.env.PORT || 3001;



//* Config
// Logger middleware
app.use(logger('dev'));
// JSON payload middleware (for data coming from frontend functions)
app.use(express.json());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors())

const Routes=require('./routes/api/users')
app.use('/',Routes);


// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

// checks if token was sent and sets a user data on the req (req.user)
app.use(require('./config/checkToken'));

// * All other routes
//app.use('/api/users', require('./routes/api/users'))
app.use('/api/users', require('./routes/api/users'));
// Put API routes here, before the "catch all" route
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})