const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

passport.use(new LocalStrategy({
    usernameField:"email"}

,async(email,password,done)=>{
    const User = await User.findOne({email:email});
}
));