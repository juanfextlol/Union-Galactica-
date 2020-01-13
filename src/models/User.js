const moongoose = require("mongoose");
const { Schema } =moongoose;
const bcrypt = require("bcryptjs");
const UserSchema = new Schema({
    name:{type:String,required:true},
    pais:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    date:{type:Date,default:Date.now}
});
UserSchema.methods.encryptPassword =async (password)=>{
const salt =await bcrypt.genSalt(10);
const hash = bcrypt.hash(password,salt);
return hash;
};


UserSchema.method.matchPassword =async function (password) {
return await bcrypt.compare(password,this.password);
};

module.exports = moongoose.model("User",UserSchema);