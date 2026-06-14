const express=require("express");
const router=express.Router();
const authController=require("../controllers/auth.controller");
const validate=require("../middleware/validate.middleware");
const {registerValidation}=require("../validations/auth.validation");
router.post("/register", ...registerValidation, validate, authController.register);
router.post("/login", authController.login);
module.exports=router;