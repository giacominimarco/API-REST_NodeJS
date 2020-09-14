const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Doctor = require('../models/Doctor');
const DS= require('../models/Doctor_Specialtie');
const Specialtie = require('../models/Specialtie');
const connection = new Sequelize(dbConfig);

Doctor.init(connection);
// DS.init(connection);
Specialtie.init(connection);
module.exports = connection;