const express = require("express");
const pessoaRouter = express.Router();
const pessoaController = require("../controllers/pessoaController");

pessoaRouter.get(
    //#swagger.summary = 'getAllPessoas'
    "/pessoa", pessoaController.getAllPessoas
);
pessoaRouter.get(
    //#swagger.summary = 'getPessoaById'
    "/pessoa/:id", pessoaController.getPessoaById
);
pessoaRouter.post(
    //#swagger.summary = 'addPessoa'
    "/pessoa", pessoaController.addPessoa

);
pessoaRouter.delete(
    //#swagger.summary = 'deletePessoa'
    "/pessoa/:id", pessoaController.deletePessoa
);

module.exports = pessoaRouter;
