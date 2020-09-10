module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('doctor_specialtie', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      doctorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {  
          model: 'doctors',
          key: 'id'
        }
      },
      specialtieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {     
          model: 'specialties',
          key: 'id'
        }
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('doctor_specialtie');
  }
};
