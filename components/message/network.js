//CAPA de red => Encargada de recibir las peticiones http, procesar la info y enviarla al controlador

const express = require("express");
const multer = require("multer"); //Nos permite recibir archivos desde las peticiones y guardarlos.
const response = require("../../network/response"); //Importamos el modulo que creamos para manejar las reponses
const router = express.Router(); //Para crear nuestro enrutador
const controller = require("./controller");

const upload = multer({
  dest: "uploads/",
});

router.get("/", function (req, res) {
  const filterMessages = req.query.user || null;
  controller
    .getMessages(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((e) => {
      response.error(req, res, "unexpected error", 500, e);
    });
});

router.post("/", upload.single("file"), function (req, res) {
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message)
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

router.patch("/:id", function (req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, "error interno", 500, err);
    });
});

router.delete("/:id", function (req, res) {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
    })
    .catch((e) => {
      response.error(req, res, "Error interno", 500, e);
    });
});

module.exports = router;
