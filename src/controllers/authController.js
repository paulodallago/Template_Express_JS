const jwt = require("jsonwebtoken");
const Person = require("../models/personModel");

const authController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const person = await Person.findOne({ where: { email, password } });
      if (!person) {
        return res.status(401).json({ error: "E-mail ou senha inválidos." });
      }
      const payload = {
        id: person.id,
        name: person.nome,
        email: person.email,
      };

      const token = jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: "60m",
      });

      return res.status(200).json({
        auth: true,
        token: token,
        user: { name: person.name, email: person.email },
      });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
};

module.exports = authController;
