const express = require("express");
const sessionRouter = express.Router();
const sessionController = require("../controllers/sessionController");

sessionRouter.post("/session", sessionController.addSession);

module.exports = sessionRouter;
