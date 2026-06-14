const employeeRepository=require("../repositories/employee.repository");
const ApiError=require("../utils/ApiError");
const createEmployee=async(employeeData)=>{
    const existingEmployee=await employeeRepository.findByEmail(employeeData.email);
    if(existingEmployee){
        throw new ApiError(400,"Employee already exists")
    }
    return employeeRepository.createEmployee(employeeData);
};
const getEmployees=async(query)=>{
    const page=Number(query.page)||1;
    const limit=Number(query.limit)||10;
    const search=query.search||"";
    const sortBy=query.sortBy||"createdAt";
    const order=query.order||"DESC";
    return employeeRepository.getEmployees({page,limit,search,sortBy,order});
};
const getEmployeeById=async(id)=>{
    const employee=await employeeRepository.findById(id);
    if(!employee){
        throw new ApiError(404,"Employee not found");
    }
    return employee;
};
const updateEmployee=async(id,data,userId)=>{
    const employee=await employeeRepository.findById(id);
    if(!employee){
        throw new ApiError(404,"Employee not found");
    }
    data.updatedBy=userId;
    await employeeRepository.updateEmployee(id,data);
    return employeeRepository.findById(id);
};
const deleteEmployee=async(id)=>{
    const employee=await employeeRepository.findById(id);
    if(!employee){
         throw new ApiError(404,"Employee not found");
    }
    await employeeRepository.softDeleteEmployee(id);
    return {message:"Employee deleted successfully"};
};
module.exports={
    createEmployee,
    getEmployees,
    getEmployeeById,
    deleteEmployee,
    updateEmployee,
};