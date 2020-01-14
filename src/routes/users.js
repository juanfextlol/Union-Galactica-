const express = require("express");
const router = express.Router();
const User =require("../models/User");
const passport =require("passport");

router.get("/users/signin",(req, res) => {
    res.render("users/signin");
});
router.post("/users/signin ",passport.authenticate("local",{
    successRedirect:"/notes",
    failureRedirect:"/users/signin",
    failureFlash:true
}));
router.get("/users/signup", (req, res) => {
    res.render("users/signup");
});
router.post("/users/signup",async (req,res)=>{
    const {name,pais,email,password,confirm_password}= req.body;
    const errors =[];
    if(name.length <= 0){
        errors.push({text:"Porfavor Inserte un Nombre"});
    }
    if(password.length <= 0){
        errors.push({text:"Porfavor Inserte una Contraseña"});
    }
    if(password != confirm_password){
        errors.push({text:"Las Constraseñas No son iguales"});
    }
    if(password.lenght < 4 ){
        errors.push({text:"La Contraseña debe ser mayor a 4 caracteres"});
    }
    if(errors.length > 0){
        res.render("users/signup",{errors,name,pais,email,password,confirm_password});
    } else {
    const emailUser = await User.findOne({email: email});
    if (emailUser ){
        req.flash("error_msg","El Email ya esta en Uso ");
        res.redirect("/users/signup");
    }
    const newUser = new User({name,pais,email,password});
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    req.flash("success_msg","Estas Registrado!")
    res.redirect("/users/signin");
    }
});
module.exports=router;