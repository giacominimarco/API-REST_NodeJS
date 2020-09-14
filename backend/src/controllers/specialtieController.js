const Specialtie = require("../models/Specialtie");

module.exports = {
  //Função para pesquisar todas as especialidades do BD
  async index(req, res) {
    const specialties = await Specialtie.findAll();
    return res.status(200).send({ specialties: specialties });
  }
};
