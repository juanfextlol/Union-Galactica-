const express = require("express");
const path = require("path");
const exphbs= require("express-handlebars");
const method0verride= require("method-override");
const session= require("express-session");
//initilizations
const app = express();
require("./database");

//settings
app.set("port",process.env.PORT || 3001);
app.set("views",path.join(__dirname,"views"));
app.engine(".hbs", exphbs({
    defaultLayout:"main",
    layoutsDir: path.join(app.get("views"),"layouts"),
    partialsDir: path.join(app.get("views"),"partials"),
    extname:".hbs"
}));
app.set("view engine",".hbs");
//middlewares
app.use(express.urlencoded({extended: false}));
app.use(method0verride("_method"));
app.use(session({
    secret:"olealapelota",
    resave: true,
    saveUninitialized:true
}))
//GlobaL Variables

//Routes
app.use(require("./routes/index"));
app.use(require("./routes/notes"));
app.use(require("./routes/users"));
//Static Files
app.use(express.static(path.join(__dirname,"public")));
//Server is Listening
app.listen(app.get("port"), () => {console.log("server on port!",app.get("port"));});