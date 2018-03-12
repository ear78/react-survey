const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();

authRoutes(app);

//OAUTH/PASSPORT IS IN services/passport.js

//AUTH ROUTES ARE IN ROUTES AUTHROUTES.JS



const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('listening on ' + PORT)
