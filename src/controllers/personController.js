const personService = require("../services/personService");

const PersonController = {
  async addPerson(req, res) {
    try {
      const { name, email, password, age } = req.body;
      const newPerson = await personService.createPerson(
        name,
        email,
        password,
        age,
      );
      return res.status(201).json(newPerson);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async getAllPersons(req, res) {
    try {
      const result = await personService.listAll();
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async getPersonById(req, res) {
    try {
      const result = await personService.getById(req.params.id);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async updatePerson(req, res) {
    try {
      const result = await personService.updatePerson(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async deletePerson(req, res) {
    try {
      const deleted = await personService.removePerson(req.params.id);
      if (deleted === 0) {
        return res.status(404).json({ error: "Person not found" });
      }

      return res.status(204).send();
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};

module.exports = PersonController;
