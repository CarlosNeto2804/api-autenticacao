if (process.env.NODE_ENV !== "Homolog" || process.env.NODE_ENV !== "Produc") {
  require("dotenv").config();
}

const PASSPORT_KEYS = {
  GITHUB: {
    CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET
  },
  GOOGLE: {
    CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
  },
  FACEBOOK: {
    CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET
  }
};
const PORT = process.env.PORT;
class Config {
  static createConfig() {
    global.config = {
      port: PORT,
      keys: PASSPORT_KEYS
    };
  }
}
module.exports = Config.createConfig();
