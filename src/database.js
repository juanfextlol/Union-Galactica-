const moongose = require("mongoose");

moongose.connect("mongodb://localhost/union-galactica-base",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
.then(db =>console.log("db is connect"))
.catch(err => console.error(err));
