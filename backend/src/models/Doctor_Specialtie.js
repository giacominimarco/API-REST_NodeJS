const { Model, DataTypes } = require('sequelize');

//É o objeto que está pegando as informações do usuário e está armazenando no banco;
class Doctor_Sequelize extends Model {
	static init(sequelize) {
		super.init({
			doctorId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
			},
			specialtieId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
			},
		}, {
			sequelize
		})
	}
}
module.exports = Doctor_Sequelize;