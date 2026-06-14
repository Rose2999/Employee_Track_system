const {body}=require("express-validator");
exports.employeeValidation=[
    body("employeeCode").notEmpty().withMessage("Employee Code is required"),
    body("firstName").notEmpty().withMessage("First Name is required"),
    body("lastName").notEmpty().withMessage("Last Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("department").notEmpty().withMessage("Department is required"),
    body("salary").isNumeric({ no_symbols: true }).withMessage("Valid salary is required"),
];