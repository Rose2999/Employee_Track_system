const employeeRepository=require("../repositories/employee.repository");
const createEmployee=async(employeeData)=>{
    const existingEmployee=await employeeRepository.findByEmail(employeeData.email);
    if(existingEmployee){
        throw new Error("Employee already exists");
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
        throw new Error("Employee not found");
    }
    return employee;
};
const deleteEmployee=async(id)=>{
    const employee=await employeeRepository.findById(id);
    if(!employee){
        throw new Error("Employee not found");
    }   
    return employeeRepository.deleteEmployee(id);
};
module.exports={
    createEmployee,
    getEmployees,
    getEmployeeById,
    deleteEmployee,
};