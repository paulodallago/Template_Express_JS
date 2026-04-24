const sessionService = require("../services/sessionService");

const SessionController = {
  async addSession(req, res) {
    try {
      const { host } = req.body;

      const newSession = await sessionService.createSession(host);

      return res.status(201).json(newSession);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async getAllSessions(req, res) {
    try {
      const result = await sessionService.listAll();

      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async getSessionById(req, res) {
    try {
      const result = await sessionService.getById(req.params.id);

      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async refreshToken(req, res) {
    try {
      const result = await sessionService.refreshToken(req.params.id);

      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async closeSession(req, res) {
    try {
      const result = await sessionService.closeSession(req.params.id);

      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async deleteSession(req, res) {
    try {
      const deleted = await sessionService.removeSession(req.params.id);

      if (deleted === 0) {
        return res.status(404).json({ error: "Session not found" });
      }

      return res.status(204).send();
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};

module.exports = SessionController;
