const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

//OAUTH/PASSPORT IS IN services/passport.js

//AUTH ROUTES ARE IN ROUTES AUTHROUTES.JS

app.get('/hello', function(req,res){
    res.send('Hello World!');
})

app.get('/', function(req,res){
    res.send('index route');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('listening on ' + PORT)
