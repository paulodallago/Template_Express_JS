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
      console.error("Error creating session:", err);
      return res.status(500).json({ error: err });
    }
  },
};

module.exports = sessionController;
