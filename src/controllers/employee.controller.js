const employeeService = require("../services/employee.service");

const createEmployee = async (req, res, next) => {
    try {
        const employeeData = { ...req.body, userId: req.user.id };
        const employee = await employeeService.createEmployee(employeeData);
        res.status(201).json({ success: true, message: "Employee created successfully", data: employee });
    } catch (error) {
        next(error);
    }
};
const getEmployees = async (req, res, next) => {
    try {
        const result = await employeeService.getEmployees(req.query);
        res.status(200).json({ success: true, message: "Employees retrieved successfully", data: result });
    } catch (error) {
        next(error);
    }
};
const getEmployeeById = async (req, res, next) => {
    try {
        const employee = await employeeService.getEmployeeById(req.params.id);
        res.status(200).json({ success: true, message: "Employee retrieved successfully", data: employee });
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
const updateEmployee = async (req, res, next) => {
  try {
    const employee=await employeeService.updateEmployee(req.params.id,req.body,req.user.id);
    res
      .status(200)
      .json({
        success: true,
        message: "Employee updated successfully",
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
  updateEmployee,
};
