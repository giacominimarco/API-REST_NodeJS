const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Doctor = require('../models/Doctor');
const Specialtie = require('../models/Specialtie');
const connection = new Sequelize(dbConfig);

Doctor.init(connection);
Specialtie.init(connection);
module.exports = connection;