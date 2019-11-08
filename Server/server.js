"use strict";

const debug = require("debug");
const https = require("https");
const Express = require("express");

class Server {
  constructor() {
    this.app = new Express();
    this.port = this.normalizePort(global.config.port || process.env.PORT);
    this.debug = debug("auth:server");
    this.server = https.createServer(this.app);
    this.server.on("error", this.onError);
    this.server.on("listening", this.onListening.bind(this));

    return this.app;
  }

  normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
      return val;
    }

    if (port >= 0) {
      return port;
    }

    return false;
  }

  onError(error) {
    if (error.syscall !== "listen") {
      throw error;
    }

    let bind =
      typeof this.port === "string" ? "Pipe " + this.port : "Port" + this.port;

    switch (error.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
        break;

      case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
        break;

      default:
        throw error;
    }
  }

  onListening() {
    let addr = this.server.address();
    let bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;

    debug("Listening on " + bind);
  }
}

module.exports = Server;
