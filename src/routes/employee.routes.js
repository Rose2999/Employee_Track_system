const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee.controller");
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
const validate = require("../middleware/validate.middleware");
const { employeeValidation } = require("../validations/employee.validation");
router.post(
  "/",
  authMiddleware,
  roleMiddleware("ADMIN", "HR"),
  ...employeeValidation,
  validate,
  employeeController.createEmployee,
);
router.get("/", authMiddleware, employeeController.getEmployees);
router.get("/:id", authMiddleware, employeeController.getEmployeeById);
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN", "HR"),
  employeeController.updateEmployee,
);
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("ADMIN"),
  employeeController.deleteEmployee,
);
module.exports = router;
