const express = require('express');
const doctorController = require('./controllers/doctorController');
const specialtieController = require('./controllers/specialtieController');
// const docSpecialtieController = require('./controllers/doctor_specialtieController');
const routes = express.Router();

routes.get('/doctors', doctorController.index);
routes.get('/specialties', specialtieController.index);
routes.get('/doctor/:id', doctorController.indexOne);

routes.post('/doctors', doctorController.store);
// routes.post('/doctor_specialties', docSpecialtieController.store);
routes.delete('/doctors/:id', doctorController.delete);
routes.put('/doctor/:id', doctorController.updated);

module.exports = routes;