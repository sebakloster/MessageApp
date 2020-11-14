const express = require("express");
const response = require("../../network/response");
const router = express.Router();
const controller = require("./controller");

router.post("/", function (req, res) {
  controller
    .addChat(req.body.users)
    .then((newChat) => response.success(req, res, newChat, 201))
    .catch((err) => response.error(req, res, "internal error", 500, err));
});

router.get("/:userId", function (req, res) {
  controller
    .listChat(req.params.userId)
    .then((users) => response.success(req, res, users, 201))
    .catch((err) => response.error(req, res, "internal error", 500, err));
});

module.exports = router;
