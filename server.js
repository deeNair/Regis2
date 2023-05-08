require('dotenv').config();
require('./config/database');
const cors=require('cors');

const bodyParser = require ('body-parser');

const express = require('express');
const path = require('path'); 
const favicon = require('serve-favicon');
const logger = require('morgan');


const app = express();

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(express.json());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

const Routes=require('./route/route')
app.use('/',Routes);

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))


app.use(require('./config/checkToken'));
app.use('/api/users', require('./routes/api/users'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})