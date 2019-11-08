"use strict";
const AuthController = require("./../controllers/auth-controller");
const passport = require("passport");
module.exports = class AuthRouter {
  constructor(app) {
    app.get("/github", passport.authenticate("github"));
    app.get(
      "/auth/github/callback",
      passport.authenticate("github", { failureRedirect: `/` }),
      AuthController.authenticate
    );
    
    app.get(
      "/google",
      passport.authenticate("google", { scope: ["profile", "email"] })
    );
    app.get(
      "/auth/google/callback",
      passport.authenticate("google", { failureRedirect: `/` }),
      AuthController.authenticate
    );
  }
};
