const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const secret = require('../config/keys').secretOrKey;
const Shelter = require('../models/shelter');


const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secret;

module.exports = (passport) => {

  passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {

    const shelter = await Shelter.findById(jwt_payload.id);

    return shelter ? done(null, shelter) : done(null, false);

  }));
}