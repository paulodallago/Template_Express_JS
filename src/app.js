require("dotenv").config();

const express = require("express");
const personRouter = require("./routes/personRouter");
const sessionRouter = require("./routes/sessionRouter");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger-output.json");

const cors = require("cors");
const { SwaggerTheme, SwaggerThemeNameEnum } = require("swagger-themes");
const authRouter = require("./routes/authRouter");

const app = express();

const PORT = process.env.PORT;

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

const theme = new SwaggerTheme();

swaggerOptions = {
  explorer: true,
  customCss: theme.getBuffer(SwaggerThemeNameEnum.DRACULA),
};

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile, swaggerOptions));

app.use("/api", personRouter);
app.use("/api", sessionRouter);
app.use("/api", authRouter);

module.exports = app;
