const express = require("express");
const router = express.Router();
router.get("/perfil",(req, res) => {
    res.send("Editar mi perfil");
});

module.exports=router;