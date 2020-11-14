exports.success = function (req, res, data, status) {
  res.status(status || 200).send({
    error: "",
    body: data,
  });
};

exports.error = function (req, res, data, status, details) {
  console.error("[response error] " + details);
  res.status(status || 500).send({
    error: data,
    body: "",
  });
};

//Con exports podemos exportar las funciones de nuestro modulo para que sean accesibles por el objeto del modulo
