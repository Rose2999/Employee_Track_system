const authService=require("../services/auth.service");

const register=async(req,res,next)=>{
    try {
        const { name, email, password, role } = req.body;
        const user = await authService.registerUser(name, email, password, role);
        res.status(201).json({ success: true, message: "User registered successfully", data:user});
    } catch (error) {
        next(error);
    }
};
const login=async(req,res,next)=>{
    try {
        const { email, password } = req.body;
        const result=await authService.loginUser(email, password);
        res.status(200).json({ success: true, message: "Login successful", data:result});
    } catch (error) {
        next(error);
    }};

module.exports={
    register,
    login,
};