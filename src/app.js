require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const employeeRoutes = require("./routes/employee.routes");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Employee Management System API",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
module.exports = app;
