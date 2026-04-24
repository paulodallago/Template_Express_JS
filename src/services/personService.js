const Person = require("../models/personModel");

class PersonService {
  async createPerson(name, email, password, age) {
    return await Person.create({ name, email, password, age });
  }

  async listAll() {
    return await Person.findAll({
      attributes: { exclude: ["password"] },
    });
  }

  async getById(id) {
    const person = await Person.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
    if (!person) throw new Error("Pessoa não encontrada");
    return person;
  }

  async updatePerson(id, data) {
    const person = await Person.findByPk(id);

    if (!person) throw new Error("Pessoa não encontrada");

    await person.update(data);

    return person;
  }

  async removePerson(id) {
    return await Person.destroy({ where: { id } });
  }
}

module.exports = new PersonService();
