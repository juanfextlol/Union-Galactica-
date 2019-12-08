const express = require ("express");
//Initializations
const app = express();

//settings
app.set("port",process.env.PORT ǀǀ 3000);
//Midlewars 

//Global Variables

//Routes

//Static Files

//Server is listening
app.listen(app.get("port"), () => {
    console.log("Server on port",app.get("port"));
});
