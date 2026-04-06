require("dotenv").config();

const express = require("express");
const pessoaRouter = require("./routes/pessoaRouter");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger-output.json");
const sequelize = require("./db");

const cors = require("cors");
const { SwaggerTheme, SwaggerThemeNameEnum } = require("swagger-themes");

const app = express();

const PORT = process.env.PORT;

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

const theme = new SwaggerTheme();

swaggerOptions = {
  explorer: true,
  customCss: theme.getBuffer(SwaggerThemeNameEnum.DRACULA),
}

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile, swaggerOptions));

sequelize.sync();

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

app.use("/api", pessoaRouter);
