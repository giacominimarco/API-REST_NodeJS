// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.createTable('specialties', {
//       id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//       },
//       name: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       }
//     });
//   },

//   down: (queryInterface, Sequelize) => {
//     return queryInterface.dropTable('specialties');
//   }
// };

module.exports = {
  up: function (migration, DataTypes, done) {
    migration.createTable(
      'specialties',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      }).then(function () {
        migration.sequelize.query(migration.QueryGenerator.bulkInsertQuery('specialties', [
          {
            name: 'ALERGOLOGIA',
          },
          {
            name: 'ANGIOLOGIA',
          },
          {
            name: 'BUCO MAXILO',
          },
          {
            name: 'CARDIOLOGIA CLÍNICA',
          },
          {
            name: 'CARDIOLOGIA INFANTIL',
          },
          {
            name: 'CIRURGIA CABEÇA E PESCOÇO',
          },
          {
            name: 'CIRURGIA CARDÍACA',
          },
          {
            name: 'CIRURGIA DE CABEÇA / PESCOÇO',
          },
          {
            name: 'CIRURGIA DE TÓRAX',
          },
          {
            name: 'CIRURGIA GERAL',
          },
          {
            name: 'CIRURGIA PEDIÁTRICA',
          },
          {
            name: 'CIRURGIA PLÁSTICA',
          },
          {
            name: 'CIRURGIA TORÁCICA',
          },
          {
            name: 'CIRURGIA VASCULAR',
          },
          {
            name: 'CLÍNICA MÉDICA',
          }
        ]));
        done();
      });
  },
  down: function (migration, DataTypes, done) {
    migration.dropTable(
      'specialties'
    ).then(function () {
      done();
    })
  }
}

// module.exports = {
//   up: function (migration, DataTypes, done) {
//     migration.createTable(
//       'specialties',
//       {
//         id: {
//           type: DataTypes.INTEGER,
//           primaryKey: true,
//           autoIncrement: true,
//           allowNull: false,
//         },
//         name: {
//           type: DataTypes.STRING,
//           allowNull: false,
//         },
//       }).success(function () {
//         migration.sequelize.query(migration.QueryGenerator.bulkInsertQuery('specialties', [
//           {
//             name: 'ALERGOLOGIA',
//           },
//           {
//             name: 'ANGIOLOGIA',
//           },
//           {
//             name: 'BUCO MAXILO',
//           },
//           {
//             name: 'CARDIOLOGIA CLÍNICA',
//           },
//           {
//             name: 'CARDIOLOGIA INFANTIL',
//           },
//           {
//             name: 'CIRURGIA CABEÇA E PESCOÇO',
//           },
//           {
//             name: 'CIRURGIA CARDÍACA',
//           },
//           {
//             name: 'CIRURGIA DE CABEÇA / PESCOÇO',
//           },
//           {
//             name: 'CIRURGIA DE TÓRAX',
//           },
//           {
//             name: 'CIRURGIA GERAL',
//           },
//           {
//             name: 'CIRURGIA PEDIÁTRICA',
//           },
//           {
//             name: 'CIRURGIA PLÁSTICA',
//           },
//           {
//             name: 'CIRURGIA TORÁCICA',
//           },
//           {
//             name: 'CIRURGIA VASCULAR',
//           },
//           {
//             name: 'CLÍNICA MÉDICA',
//           }
//         ])).complete(done);
//       });
//   },

//   down: function (migration, DataTypes, done) {
//     migration.dropTable('specialties').complete(done);
//   }
// };
