const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env'});
require('./db/conn');
const User = require('./model/userSchema');

app.use(express.json());

const PORT = process.env.PORT;


app.use(require ('./router/auth'));

//Middleware

const middleware = (req, res, next) => {
    console.log('Middleware ROGER')
}




app.get('/', (req, res) => {
    res.send('its working')
});

/* app.get('/about', middleware, (req, res) => {
    console.log('About page')
    res.send('its working ABOUT')
}); */

/* app.get('/contact', (req, res) => {
    res.cookie("Test", 'Mrud');
    res.send('its working contact me')
}); */

app.get('/signin', (req, res) => {
    res.send('Login here')
});

app.get('/signup', (req, res) => {
    res.send('Register')
});



app.listen(PORT, () => {
    console.log('running on port ${PORT} ')
})