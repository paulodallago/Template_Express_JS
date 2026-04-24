const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authController");

authRouter.post(
  "/login",
  // #swagger.tags = ['Auth']
  // #swagger.summary = 'Login'
  authController.login,
);

module.exports = authRouter;
