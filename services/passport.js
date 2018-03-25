
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
	}, async (accessToken, refreshToken, profile, done) => {

		const existingUser = await User.findOne({ googleId: profile.id })

		if(existingUser){
			//we already have record in db
			return done(null, existingUser);
		}
			//we don't have record in db
			const user = await new User({ googleId: profile.id }).save()
				done(null, user);

	})
);
