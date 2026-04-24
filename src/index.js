const app = require("./app");
const sequelize = require("./db");

const PORT = process.env.PORT;

sequelize.sync();

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
