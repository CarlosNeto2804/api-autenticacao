"use strict";
require("./../configurations");
const PASSPORT = require("passport");
const GitHubStrategy = require("passport-github").Strategy;
const GoogleStrategy = require("passport-google-oauth20");
const FacebookStrategy = require("passport-facebook").Strategy;
const PASSPORT_KEYS = global.config.keys;

PASSPORT.serializeUser(function(user, done) {
  done(null, user.id);
});

PASSPORT.deserializeUser(function(obj, done) {
  done(null, obj);
});
//STRATEGIES
PASSPORT.use(
  new GitHubStrategy(
    {
      clientID: PASSPORT_KEYS.GITHUB.CLIENT_ID,
      clientSecret: PASSPORT_KEYS.GITHUB.CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
      scope: "user:email"
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

PASSPORT.use(
  new GoogleStrategy(
    {
      clientID: PASSPORT_KEYS.GOOGLE.CLIENT_ID,
      clientSecret: PASSPORT_KEYS.GOOGLE.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: "user:email"
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

PASSPORT.use(
  new FacebookStrategy(
    {
      clientID: PASSPORT_KEYS.FACEBOOK.CLIENT_ID,
      clientSecret: PASSPORT_KEYS.FACEBOOK.CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
      profileFields: [
        "id",
        "displayName",
        "name",
        "gender",
        "picture.type(large)"
      ]
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);
