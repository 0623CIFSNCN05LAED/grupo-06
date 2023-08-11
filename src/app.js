const express = require("express");
const app = express ();
app.get('/', (req, res) => {
res.send('Probando Proyecto integrador');
});
const PORT = 3001;
app.listen(PORT, () => {
console.log(`Se prendió en el puerto ${PORT}`);
});