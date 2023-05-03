//const bodyParser = require ('body-parser');

// const app= express();

//  const PORT = express();
//  const PORT =8000;

//  app.listen(PORT, ()=>console.log(`server is running successfully on port ${PORT}
const userRoute = require('./routes/api/users')
require('dotenv').config();
require('./config/database'); // connects to db
const express = require('express');
const path = require('path'); // node module
const favicon = require('serve-favicon');
const logger = require('morgan');
const { default: app } = require('./src/App');
const cors= require ('cors');
// App.use (bodyParser.json({extended: true}));
// const app = express();
// development port: 3001
// in production we'll a PORT number set in the environment variables
const PORT = process.env.PORT || 3001;



//* Config
// Logger middleware
app.use(logger('dev'));
app.use(cors())
// JSON payload middleware (for data coming from frontend functions)
app.use(express.json());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

// * All other routes


app.use('/api/users', userRoute)

// Put API routes here, before the "catch all" route
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})