var app, compile, config, express, nib, routes, stylus, fs, im, authorizenet;
express = require("express");
routes = require("./routes/site.js");
config = require("./config/config.js");
nib = require("nib");
stylus = require("stylus");
app = express();
fs = require('fs');
im = require('imagemagick');
authorizenet = require('paynode').use('authorizenet');
var client = authorizenet.createClient({
  level:authorizenet.levels.sandbox
  ,login:'5q2vbG7NnQ'
  ,tran_key:'9N5NR5t89576cGfn'
});
client.performAimTransaction({
  "x_type": "AUTH_CAPTURE",
  "x_method": "CC",
  "x_card_num": creditCard,
  "x_exp_date": creditExp,

  "x_amount": "19.99",
  "x_description": "Sample Transaction",

  "x_first_name": firstName,
  "x_last_name": lastName,
  "x_address": address1 + address2,
  "x_state": clientState,
  "x_zip": clientZip})
  .on('success', function(err, result){
    // do something to handle a successful transaction
    console.log('transaction complete')
  })
  .on('failure', function(err, result){
    // do something to handle a failed transaction
    console.log('transaction failed');
  }) 
});
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

app.listen(config.port);
console.log("Server started on port " + config.port + " in " + app.get('env') + " mode");
