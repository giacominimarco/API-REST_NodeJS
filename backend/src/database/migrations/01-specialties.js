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
        created_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
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