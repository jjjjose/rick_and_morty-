const express = require("express");
const path = require("path");
const app = express();
const http = require("http");

// app.use(express.json());

// poniendo cabeceras para aceptar cualquier solicitud
// app.use("/", function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Methods", "*");
//   next();
// });

// archivos estaticos o complilado de quasar
let options = {
  dotfiles: "ignore",
  etag: true,
  extensions: ["htm", "html"],
  index: false,
  maxAge: "7d",
  redirect: false,
  setHeaders: function(res, path, stat) {
    res.set("x-timestamp", Date.now());
  }
};

app.use(express.static(path.join(__dirname + "/dist/spa/"), options));

// iniciando la app
app.get("/", (req, res, next) => {
  res.header("Content-Type", "text/html");
  res.sendFile(path.join(__dirname + "/dist/spa/index.html"));
});

// iniciando el server en el port 3000
// app.listen(55, () => {
//   console.log("Iniciando SERVER en puerto 55");
// });
http.createServer(app).listen(80, () => {
  console.log("Iniciando SERVER http");
});
