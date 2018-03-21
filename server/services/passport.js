
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//pulling in model class from User.js and 'users'
const User = mongoose.model('users');

passport.use(new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback'
	}, (accessToken, refreshToken, profile, done) => {
		User.findOne({ googleId: profile.id })
		.then((existingUser) => {
			if(existingUser){
				//we already have record in db
			} else {
				//we don't have record in db
				new User({ googleId: profile.id }).save();
			}
		})



	})
);
