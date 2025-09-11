const { SwaggerTheme, SwaggerThemeNameEnum } = require("swagger-themes");

const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: {
    version: "1.0.0",
    title: "Lyceum API",
    description: "Rest API docs for a prototype app.",
  },
  servers: [
    {
      url: "http://localhost:3000",
      // description: "Local development server",
    },
  ],
};

const theme = new SwaggerTheme();

const swaggerOptions = {
  explorer: true,
  customCss: theme.getBuffer(SwaggerThemeNameEnum.DRACULA),
};

// const doc = {
//   info: {
//     version: "1.0.0",
//     title: "My API",
//     description: "Some description...",
//   },
//   servers: [
//     {
//       url: "http://localhost:3000",
//     },
//   ],
//   components: {
//     schemas: {
//       someBody: {
//         $name: "Jhon Doe",
//         $age: 29,
//         about: "",
//       },
//       someResponse: {
//         name: "Jhon Doe",
//         age: 29,
//         diplomas: [
//           {
//             school: "XYZ University",
//             year: 2020,
//             completed: true,
//             internship: {
//               hours: 290,
//               location: "XYZ Company",
//             },
//           },
//         ],
//       },
//       someEnum: {
//         "@enum": ["red", "yellow", "green"],
//       },
//     },
//     securitySchemes: {
//       bearerAuth: {
//         type: "http",
//         scheme: "bearer",
//       },
//     },
//   },
// };

const outputFile = "./swagger-output.json";
const endpointsFiles = ["../routes/sessionRoutes.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("../index");
});

module.exports = swaggerOptions;
