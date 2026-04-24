const express = require("express");
const personRouter = express.Router();
const personController = require("../controllers/personController");

personRouter.get(
  /*
    #swagger.tags = ['Persons']
    #swagger.summary = 'getAllPersons'
  */
  "/person",
  personController.getAllPersons,
);
personRouter.get(
  //#swagger.tags = ['Persons']
  //#swagger.summary = 'getPersonById'
  "/person/:id",
  personController.getPersonById,
);
personRouter.post(
  //#swagger.tags = ['Persons']
  //#swagger.summary = 'addPerson'
  "/person",
  personController.addPerson,
);
personRouter.put(
  //#swagger.tags = ['Persons']
  //#swagger.summary = 'updatePerson'
  "/person/:id",
  personController.updatePerson,
);
personRouter.delete(
  //#swagger.tags = ['Persons']
  //#swagger.summary = 'deletePerson'
  "/person/:id",
  personController.deletePerson,
);

module.exports = personRouter;
