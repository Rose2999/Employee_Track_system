const {Employee}=require("../models");
const {Op}=require("sequelize");

const createEmployee=async(data)=>{
    return Employee.create(data);
};
const findByEmail=async(email)=>{
    return Employee.findOne({where:{email}});
};
const findById=async(id)=>{
    return Employee.findByPk(id);
};
const deleteEmployee=async(id)=>{
    return Employee.destroy({where:{id}});
};
const getEmployees=async({page,limit,search,sortBy,order})=>{
    const offset=(page-1)*limit;
    const where={status:"ACTIVE"};
    if(search){
        where[Op.or]=[
            {firstName:{[Op.iLike]:`%${search}%`}},
            {lastName:{[Op.iLike]:`%${search}%`}},
            {email:{[Op.iLike]:`%${search}%`}},
            {department:{[Op.iLike]:`%${search}%`}},
        ];
    }
    return Employee.findAndCountAll({
        where,
        limit,
        offset,
        order: [[sortBy, order]]
    });
}
const updateEmployee=async(id,data)=>{
    return Employee.update(data,{where:{id}});
}
const softDeleteEmployee=async(id)=>{
    return Employee.update({status:"INACTIVE"},{where:{id}});
}   
module.exports={
    createEmployee,
    findByEmail,
    findById,
    deleteEmployee,
    updateEmployee,
    getEmployees,
    softDeleteEmployee,
};