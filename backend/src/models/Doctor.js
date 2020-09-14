const { Model, DataTypes } = require('sequelize');

//É o objeto que está pegando as informações do usuário e está armazenando no banco;
class Doctor extends Model {
	static init(sequelize) {
		super.init({
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
				validate: {
					notEmpty: {
						msg: "Preencha o campo com um nome válido"
					},
					len: {
						args: [3, 100],
						msg: "O campo 'Nome' deve ter entre 3 e 100 caracteres",
					}
				}
			},
			crm: {
				type: {
					type: DataTypes.INTEGER,
					allowNull: false,
					onUpdate: 'CASCADE',
        	onDelete: 'CASCADE',
					validate: {
						notEmpty: {
							msg: "Preencha o campo com um CRM válido"
						},
					}
				}
			},
			phone: {
				type: DataTypes.STRING,
				allowNull: false,
				onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
				validate: {
					notEmpty: {
						msg: "Coloque um telefone"
					}
				}
			}
		}, {
			sequelize
		})
	}
}
module.exports = Doctor;