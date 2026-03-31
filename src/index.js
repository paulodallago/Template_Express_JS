const express = require("express");
const sessionRouter = require("./routes/sessionRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger-output.json");

const cors = require("cors");
const { SwaggerTheme, SwaggerThemeNameEnum } = require("swagger-themes");

const app = express();

const PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:3002",
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

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

app.use("/api", sessionRouter);
