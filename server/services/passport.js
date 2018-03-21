
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//pulling in model class from User.js and 'users'
const User = mongoose.model('users');

//serializing for cookies
passport.serializeUser((user, done) => {
	done(null, user.id);
})

//deserialize back to user model
passport.deserializeUser((id, done) => {
	User.findById(id)
	.then((user) => {
		done(null, user);
	})
})

passport.use(new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback'
	}, (accessToken, refreshToken, profile, done) => {
		User.findOne({ googleId: profile.id })
		.then((existingUser) => {
			if(existingUser){
				//we already have record in db
				done(null, existingUser);
			} else {
				//we don't have record in db
				new User({ googleId: profile.id })
				.save()
				.then((user) => {
					done(null, user);
				})
			}
		})



	})
);
