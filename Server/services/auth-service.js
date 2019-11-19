"use strict";
module.exports = class AuthService {
  static async authenticate(req) {
    try {
      const name = req.provider == "github" ? req.username : req.displayName;
      let formatted_user = {
        code: req.id,
        name: name,
        email: req.emails ? req.emails[0].value : "",
        picture: req.photos[0].value,
        active: true
      };
      return { formatted_user: formatted_user, original_user: req };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
};
