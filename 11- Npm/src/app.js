const express = require("express");
const app = express();
const path = require("path");
const port = 3000


app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/index.html"));
});


app.listen(port, () => {
  console.log(` servidor iniciado correctamente en el puerto http://localhost:${port}`);
});

app.use(express.static(path.resolve(__dirname, "./public")));
