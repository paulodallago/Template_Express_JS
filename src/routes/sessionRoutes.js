const express = require("express");
const sessionRouter = express.Router();
const sessionController = require("../controllers/sessionController");

sessionRouter.get(
    //#swagger.summary = 'getAllSessions'
    "/session", sessionController.getAllSessions
);
sessionRouter.get(
    //#swagger.summary = 'getSessionById'
    "/session/:id", sessionController.getSessionById
);
sessionRouter.put(
    //#swagger.summary = 'refreshToken'
    "/session/:id", sessionController.refreshToken
);
sessionRouter.post(
    //#swagger.summary = 'addSession'
    "/session", sessionController.addSession

);
sessionRouter.delete(
    //#swagger.summary = 'deleteSession'
    "/session/:id", sessionController.deleteSession
);

module.exports = sessionRouter;
