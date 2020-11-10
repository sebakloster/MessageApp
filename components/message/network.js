//CAPA de red => Encargada de recibir las peticiones http, procesar la info y enviarla al controlador

const express = require("express");
const response = require("../../network/response"); //Importamos el modulo que creamos para manejar las reponses
const router = express.Router(); //Para crear nuestro enrutador
const controller = require("./controller");

router.get("/", function (req, res) {
  controller
    .getMessages()
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((e) => {
      response.error(req, res, "unexpected error", 500, e);
    });
});

router.post("/", function (req, res) {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(() => {
      response.error(
        req,
        res,
        "Informacion invalida",
        400,
        "Error en el controller para crear el mensaje"
      );
    });
});

module.exports = router;
