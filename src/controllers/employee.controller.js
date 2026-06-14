const employeeService = require("../services/employee.service");

const createEmployee = async (req, res, next) => {
  try {
    const employeeData = {
      employeeCode: req.body.employeeCode,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      department: req.body.department,
      salary: req.body.salary,
      profileImage: req.file ? req.file.path : null,
      userId: req.user.id,
    };
    const employee = await employeeService.createEmployee(employeeData);
    res
      .status(201)
      .json({
        success: true,
        message: "Employee created successfully",
        data: employee,
      });
  } catch (error) {
    next(error);
  }
};
const getEmployees = async (req, res, next) => {
  try {
    const result = await employeeService.getEmployees(req.query);
    res
      .status(200)
      .json({
        success: true,
        message: "Employees retrieved successfully",
        data: result,
      });
  } catch (error) {
    next(error);
  }
};
const getEmployeeById = async (req, res, next) => {
  try {
    const employee = await employeeService.getEmployeeById(req.params.id);
    res
      .status(200)
      .json({
        success: true,
        message: "Employee retrieved successfully",
        data: employee,
      });
  } catch (error) {
    next(error);
  }
};
const deleteEmployee = async (req, res, next) => {
  try {
    const employee = await employeeService.deleteEmployee(req.params.id);
    res
      .status(200)
      .json({
        success: true,
        message: "Employee deleted successfully",
        data: employee,
      });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  deleteEmployee,
};
