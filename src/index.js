const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
//Initializations
const app = express();

//settings
app.set('port', process.env.PORT || 4000);
app.set("views",path.join(__dirname,"views"));
app.engine(".hbs",exphbs((
defaultlayout:;
layoutsDir:
partialsDir:
)));
//Midlewars 

//Global Variables

//Routes

//Static Files

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });