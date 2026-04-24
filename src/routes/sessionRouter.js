const express = require("express");
const sessionRouter = express.Router();
const sessionController = require("../controllers/sessionController");
const {
  validateToken,
  validateUser,
} = require("../middlewares/authMiddleware");

sessionRouter.get(
  //#swagger.tags = ['Sessions']
  //#swagger.summary = 'getAllSessions'
  "/session",
  sessionController.getAllSessions,
);
sessionRouter.get(
  //#swagger.tags = ['Sessions']
  //#swagger.summary = 'getSessionById'
  "/session/:id",
  sessionController.getSessionById,
);
sessionRouter.put(
  //#swagger.tags = ['Sessions']
  //#swagger.summary = 'refreshToken'
  "/session/refresh/:id",
  validateUser,
  sessionController.refreshToken,
);
sessionRouter.put(
  //#swagger.tags = ['Sessions']
  //#swagger.summary = 'closeSession'
  "/session/close/:id",
  validateUser,
  sessionController.closeSession,
);
sessionRouter.post(
  //#swagger.tags = ['Sessions']
  //#swagger.summary = 'addSession'
  "/session",
  validateToken,
  sessionController.addSession,
);
sessionRouter.delete(
  //#swagger.tags = ['Sessions']
  //#swagger.summary = 'deleteSession'
  "/session/:id",
  validateUser,
  sessionController.deleteSession,
);

module.exports = sessionRouter;
