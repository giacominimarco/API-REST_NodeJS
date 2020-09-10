const Doctors = require("../models/Doctor");

module.exports = {
  //Função para pesquisar todos os usuários do banco de dados
  async index(req, res) {
    const doctors = await Doctors.findAll();
    return res.status(200).send({ doctors: doctors });
  },
  
  //Função para pesquisar um usuário específico do banco de dados
  async indexOne(req, res) {
    const { id } = req.params;
    const doctor = await Doctors.findOne({
      where: {
        id: id,
      },
    });
    if (doctor === null) {
      return res.status(422).send({ message: "Não existe este usuário" });
    }
    return res.status(200).send({ doctor: doctor });
  },

  //Função para criar um usuário como requisitos funcionais
  async store(req, res) {
    try {
      const { name, crm, phone } = req.body;

      //Verificar se o CRM tem 5 digitos.
      if (crm.toString().length !== 5) {
        return res.status(422).send({ message: 'CRM com apenas 5 digitos' });
      }

      //Verificar se o CRM já consta no banco de dados.
      if (await Doctors.findOne({
        where: {
          crm: crm,
        },
      }))

        return res.status(422).send({ message: 'CRM duplicado' });

      const doctor = await Doctors.create({ name, crm, phone });
      return res.status(200).json(doctor);

    } catch (err) {
      return res.status(422).json(err);
    }
  },

  // Função para deletar o usuário de acordo com o id como parâmetro.
  async delete(req, res) {
    const { id } = req.params;

    await Doctors.destroy({ where: { id } });

    return res.status(204).send({ message: "Usuário deletado com sucesso!" });
  },

  //Função para atualizar as informações do usuário como: Nome, crm e phone.
  async updated(req, res) {
    const { id } = req.params;
    const { name, crm, phone } = req.body;
    try {
      await Doctors.update(
        {
          name: name,
          crm: crm,
          phone: phone,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return res.status(200).send();

    } catch (err) {
      return res.status(422).json(err);
    }
  },
};
