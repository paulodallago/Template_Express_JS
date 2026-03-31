const Session = require("../models/sessionModel");
const crypto = require("crypto");

const sessionController = {
  async addSession(req, res) {
    try {
      await Session.sync();

      const { hostName } = req.body;

      const token = crypto
        .randomBytes(Math.ceil(8 / 2))
        .toString("hex")
        .slice(0, 8);

      const newSession = await Session.create({ token, hostName });

      return res.status(201).json(newSession);
    } catch (err) {
      console.error("addSession: ", err);
      return res.status(500).json({ error: err });
    }
  },

  async getAllSessions(req, res) {
    try {
      await Session.sync();

      const result = await Session.findAll();

      return res.status(200).json(result);
    } catch (err) {
      console.error("getAllSessions: ", err);
      return res.status(500).json({error: err});
    }
  },

  async getSessionById(req, res) {
    try {
      await Session.sync();

      const { id } = req.params;

      const result = await Session.findByPk(id)

      return res.status(200).json(result);
    } catch (err) {
      console.error("getSessionById error: ", err);
      return res.status(500).json({error: err});
    }
  },

  async refreshToken(req, res) {
    try {
      await Session.sync();

      const { id } = req.params;

      const session = await Session.findByPk(id);
      session.token = crypto
                      .randomBytes(Math.ceil(8 / 2))
                      .toString("hex")
                      .slice(0, 8);

      await session.save();

      return res.status(200).json(session);
    } catch (err) {
      console.error("getSessionById error: ", err);
      return res.status(500).json({error: err});
    }
  },

  async deleteSession(req, res) {
    try {
      await Session.sync();

      const { id } = req.params;

      const result = await Session.destroy({
        where: {
          id: id
        }
      });

      return res.status(200).json(result);
    } catch (err) {
      console.error("getSessionById error: ", err);
      return res.status(500).json({error: err});
    }
  }
};

module.exports = sessionController;
