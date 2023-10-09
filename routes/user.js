const express = require("express");
const userController = require("../Controller/user");
const router = express.Router();

router
  .get("/:id", userController.getUser)
  .get("/", userController.getUsers)
  .post("/", userController.createUser)
  .put("/:id", userController.putUsers)
  .delete("/:id", userController.deleteUsers)
  .patch("/:id", userController.patchUsers);

exports.router = router;
