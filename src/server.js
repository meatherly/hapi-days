"use strict";

const Hapi = require("hapi");

const server = Hapi.server({
  port: process.env.PORT,
  host: process.env.HOST || "0.0.0.0"
});

server.route({
  method: "GET",
  path: "/",
  handler: (request, h) => {
    return "Hello, world!";
  }
});

server.route({
  method: "GET",
  path: "/goodbye/{name}",
  handler: (request, h) => {
    return `Goodbye, ${encodeURIComponent(request.params.name)}!`;
  }
});

server.route({
  method: "GET",
  path: "/turnitup/to",
  handler: (request, h) => {
    return `11!!!!`;
  }
});

server.route({
  method: "GET",
  path: "/{name}",
  handler: (request, h) => {
    return "Hello, " + encodeURIComponent(request.params.name) + "!!";
  }
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
