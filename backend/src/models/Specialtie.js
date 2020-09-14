const { Model, DataTypes } = require('sequelize');

//É o objeto que está pegando as informações do usuário e está armazenando no banco;
class Specialtie extends Model {
	static init(sequelize) {
		super.init({
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
			},
		}, {
			sequelize
		})
	}
}
module.exports = Specialtie;