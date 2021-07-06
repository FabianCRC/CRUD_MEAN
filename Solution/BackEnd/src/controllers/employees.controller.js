const hello = (req, res) => res.send('hello');
const employeeController = {};

const Employee = require('../models/Employee')

employeeController.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeeController.createEmployees = async (req, res) => {
    const newEmployee = new Employee(req.body)

    await newEmployee.save();

    res.send({ message: "Success" });
};

employeeController.getEmployee = async (req, res) => {

    const employee = await Employee.findById(req.params.id);
    res.send(employee);

};


employeeController.updateEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({status:"Updated"})
};

employeeController.deleteEmployee = async (req, res) => {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    res.send({ status: "Delete success" });
};



module.exports = employeeController;