const express = require("express");
const app = express();

const conn = require("./db/conn");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const apiRoutes = require("./routes/api/index");
app.use("/api", apiRoutes);

const webRoutes = require("./routes/web/index");
app.use("/", webRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});