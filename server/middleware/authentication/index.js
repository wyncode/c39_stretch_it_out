const passport = require('passport'),
  JwtStrategy = require('passport-jwt').Strategy,
  //this is what passport is using to authenticate
  User = require('../../db/models/user'),
  ExtractJwt = require('passport-jwt').ExtractJwt;

let jwtOptions = {
  //jwtFromRequest is a function that accepts a request as its only parameter and returns either the JWT as a string or null
  jwtFromRequest: (req) => {
    return req?.cookies?.jwt || ExtractJwt.fromAuthHeaderWithScheme('jwt')(req);
    //if the request has a cookie with a jwt, then we'll return that cookie.  OR, we'll extract the jwt from auth header
    //the front end developer is deciding where the jwt is being set
    //fromAuthHeaderWithScheme is a passport native extractor function that looks for JWT in the authorization header, expecting the scheme to match the auth_scheme
  },
  secretOrKey: process.env.JWT_SECRET
};
//Scans the request for where the jwt is.  sets the token for request based on if it is in the cookie or in the header.

passport.use(
  //
  'jwt',

  new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    //JwtStrategy controls how the token is extracted from the request/verified

    if (Date.now() > jwtPayload.expires) {
      return done(null, false, { message: 'jwt expired' });
      //this is what happens if you've been logged in too long
    }
    let { iat, exp, ...userData } = jwtPayload;

    //above, we are destructuring the data from the token that we set up in the genAuthToken in the users.js model
    userData = await User.findById(userData._id);
    //overriding the user data so that instead of just _id and name, it is all the userData from the User model;
    return done(null, userData);
  })
);
module.exports = passport;
