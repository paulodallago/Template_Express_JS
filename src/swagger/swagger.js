// https://swagger-autogen.github.io/docs/endpoints/

const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: {
    version: "1.0.0",
    title: "Lyceum API",
    description:
      "API para criação de sessões para um jogo online. Trabalho da disciplina de Serviços Web",
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 3000}`,
      // description: "Local development server",
    },
  ],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = [
  "../routes/sessionRouter.js",
  "../routes/personRouter.js",
  "../routes/authRouter.js",
];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("../index");
});
