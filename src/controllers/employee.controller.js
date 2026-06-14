const employeeService = require("../services/employee.service");
const ApiResponse=require("../utils/ApiResponse");

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
      createdBy: req.user.id,
    };
    const employee = await employeeService.createEmployee(employeeData);
    res
      .status(201)
      .json(
        new ApiResponse(201, "Employee created successfully", employee)
      );
  } catch (error) {
    next(error);
  }
};
const getEmployees = async (req, res, next) => {
  try {
    const result = await employeeService.getEmployees(req.query);
    res
      .status(200)
      .json(new ApiResponse(200, "Employees retrieved successfully", result));
  } catch (error) {
    next(error);
  }
};
const getEmployeeById = async (req, res, next) => {
  try {
    const employee = await employeeService.getEmployeeById(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(200, "Employee retrieved successfully", employee));
  } catch (error) {
    next(error);
  }
};
const deleteEmployee = async (req, res, next) => {
  try {
    const employee = await employeeService.deleteEmployee(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(200, "Employee deleted successfully", employee));
  } catch (error) {
    next(error);
  }
};
const updateEmployee = async (req, res, next) => {
  try {
    const employee=await employeeService.updateEmployee(req.params.id,req.body,req.user.id);
    res
      .status(200)
      .json(new ApiResponse(200, "Employee updated successfully", employee));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  deleteEmployee,
  updateEmployee,
};
