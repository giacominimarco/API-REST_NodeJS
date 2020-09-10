const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Doctor = require('../models/Doctor');
const connection = new Sequelize(dbConfig);

Doctor.init(connection);
module.exports = connection;