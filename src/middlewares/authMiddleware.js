const jwt = require("jsonwebtoken");
const sessionService = require("../services/sessionService");

function validateToken(req, res, next) {
  const authHeader = req.headers["authorization"] || "";

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }

  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }

    req.userId = decoded.id;
    next();
  });
}

function validateUser(req, res, next) {
  const authHeader = req.headers["authorization"] || "";
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }

  jwt.verify(token, process.env.JWT_KEY, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }

    try {
      const session = await sessionService.getById(req.params.id);

      if (session.host !== decoded.id) {
        return res
          .status(403)
          .json({ error: "Provided user has no permission" });
      }
    } catch (error) {
      return res.status(404).json({ error: "Session not found" });
    }

    next();
  });
}

module.exports = { validateToken, validateUser };
