const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
passport = require('passport'),
GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


// Load User model
const User = require('../models/User');




const authConfig = {
  "google": {
      "clientID": "1058349356007-nlgsimd4dtnl8oq9kcpm8s103tipfbir.apps.googleusercontent.com",
      "clientSecret": "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",
      "callbackURL": "http://localhost:3000",
      "passReqToCallback"   : true

  }
};

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );


  // Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
//   See http://passportjs.org/docs/configure#verify-callback
passport.use(new GoogleStrategy(

  // Use the API access settings stored in ./config/auth.json. You must create
  // an OAuth 2 client ID and secret at: https://console.developers.google.com
  authConfig.google,

  function(accessToken, refreshToken, profile, done) {

    User.findOrCreate({ email: profile.id }, function (err, user) {
      return done(err, user);

    


    // Typically you would query the database to find the user record
    // associated with this Google profile, then pass that object to the `done`
    // callback.
  
  })
}
));



  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
