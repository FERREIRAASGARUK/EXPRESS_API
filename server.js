const express = require("express"); //IMPORTANDO EXPRESS
const multer = require("multer"); //IMPORTANDO MULTER
const bodyParse = require("body-parser"); //IMPORTANDO BODY-PARSER
const estados = require("./estados.json"); //IMPORTANDO O ARQUIVO JSON

const cors = require("cors"); //IMPORTANDO O CORS
const app = express(); //INSTANCIANDO EXPRESS

app.use(cors()); //Definindo o midleware do cors
app.use(bodyParse.urlencoded({ extended: true })); //Definindo o midleware do body-parser
app.use(bodyParse.json()); //Definindo o midleware do json

app.use("/estados", (req, res) => {
  res.send(estados);
});

app.listen(8080, console.log("Running"));
