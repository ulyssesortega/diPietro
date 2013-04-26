var app, compile, config, express, nib, routes, stylus, fs, im;
express = require("express");
var https = require('https');
var http = require('http');
routes = require("./routes/site.js");
config = require("./config/config.js");
nib = require("nib");
stylus = require("stylus");
app = express();
fs = require('fs');
im = require('imagemagick');

var options = {
    key: fs.readFileSync('privatekey.pem'),
    cert: fs.readFileSync('certificate.pem')
};

compile = function(str, path) {
  return stylus(str).set("filename", path).set("compress", false).use(nib()).import("nib");
};

app.configure(function() {
  app.set("views", __dirname + "/views");
  app.set("view engine", "jade");
  app.use(express.logger());
  app.use(stylus.middleware({
    src: __dirname + "/public",
    compile: compile
  }));
  app.enable('trust proxy');
  app.use(express["static"](__dirname + "/public")); // Should be commented out when deployed with Nginx serving static files
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure("development", function() {
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
  app.locals.pretty = true;
});

app.configure("production", function() {
  app.use(express.errorHandler());
  app.locals.pretty = false;
});

app.get("/", routes.index);
app.get("/about", routes.about);
app.get("/classes", routes.classes);
app.get("/faq", routes.faq);
app.get("/contact", routes.contact);
app.get("/educators", routes.educators);
app.get("/insalon", routes.insalon);
app.get("/cut", routes.cut);
app.get("/etc", routes.etc);
app.get("/color", routes.color);
app.get("*", routes.error);

http.createServer(app).listen(config.port);
https.createServer(options, app).listen(443);

console.log("Server started on port " + config.port + " in " + app.get('env') + " mode");
