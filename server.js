//Express es un framework que nos permite hacer el backend de web apps
//una vez instalado el paquete, llamamos al modulo correspondiente
const express = require("express");
const bodyParser = require("body-parser"); //Nos permite trabajar con el body de las peticiones

const connectDB = require("./db");
//const router = require("./components/message/network");
const router = require("./network/routes");

connectDB(
  "mongodb+srv://db_user_chat:ndgTqigpkG1AlUeD@cluster0.3vhjh.mongodb.net/db_chat?retryWrites=true&w=majority"
);

var app = express();
app.use(bodyParser.json()); //Podemos parsear los bodies a info en JSON por ej
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(router); //Le decimos a nuestra app que use el enrutador

router(app);

app.use("/app", express.static("public")); // Le decimos que a /app lo responda con los archivos de la carpeta public

//------

app.listen(3000);
console.log("La app esta escuchando en el puerto 3000");
