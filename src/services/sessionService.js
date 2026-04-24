const Session = require("../models/sessionModel");
const crypto = require("crypto");

class SessionService {
  generateToken() {
    return crypto
      .randomBytes(Math.ceil(8 / 2))
      .toString("hex")
      .slice(0, 8);
  }

  async createSession(host) {
    const session = await Session.create({
      token: this.generateToken(),
      host,
    });

    return session;
  }

  async listAll() {
    return await Session.findAll();
  }

  async getById(id) {
    const session = await Session.findByPk(id);

    if (!session) throw new Error("Sessão não encontrada");

    return session;
  }

  async refreshToken(id) {
    const session = await Session.findByPk(id);

    if (!session) throw new Error("Sessão não encontrada");

    session.token = this.generateToken();

    await session.save();

    return session;
  }

  async closeSession(id) {
    const session = await Session.findByPk(id);

    if (!session) throw new Error("Sessão não encontrada");

    session.expires = new Date();

    await session.save();

    return session;
  }

  async removeSession(id) {
    const deleted = await Session.destroy({
      where: { id },
    });

    if (!deleted) throw new Error("Sessão não encontrada");

    return deleted;
  }
}

module.exports = new SessionService();
