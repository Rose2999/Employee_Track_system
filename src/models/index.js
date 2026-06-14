const User = require("./User");
const Employee = require("./Employee");

User.hasMany(Employee, { foreignKey: "userId" });
Employee.belongsTo(User, { foreignKey: "userId" });
module.exports = {
  User,
  Employee,
};
