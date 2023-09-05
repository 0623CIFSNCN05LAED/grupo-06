const express = require("express");
const path = require("path");

const app = express (); //guarda la ejecucion de todo express en la variable app
const PORT = 3001;

app.use(express.static(path.join(__dirname, "../public")));

app.listen(PORT, () => {
console.log(`Se prendió en el puerto ${PORT}`);
});
 //especificar la ruta("/"raiz), mediante el metodo get, recibe dos parametros (ruta o url y callback)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html")); // enviar una archivo al navegador, ruta absoluta con ubicacion del archivo
  });
  app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
  });
  app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
  });
  app.get("/productDetail", (req, res) => {
    res.sendFile(path.join(__dirname, "views/ProductDetail.html"));
  });
  app.get("/productCart", (req, res) => {
    res.sendFile(path.join(__dirname, "views/ProductCart.html"));
  });
