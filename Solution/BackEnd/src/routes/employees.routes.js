const {Router} = require('express');
const router= Router();

const employeesController = require('../controllers/employees.controller.js');
//CRUD


router.get('/', employeesController.getEmployees);
router.post('/', employeesController.createEmployees);
router.get('/:id', employeesController.getEmployee);
router.put('/:id', employeesController.updateEmployee);
router.get('/:id', employeesController.deleteEmployee);


module.exports= router