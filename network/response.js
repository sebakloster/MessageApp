exports.success = function (req, res, message, status) {
  res.status(status || 200).send({
    error: "",
    body: message,
  });
};

exports.error = function (req, res, message, status, details) {
  console.error("[response error] " + details);
  res.status(status || 500).send({
    error: message,
    body: "",
  });
};

//Con exports podemos exportar las funciones de nuestro modulo para que sean accesibles por el objeto del modulo
