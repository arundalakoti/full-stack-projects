const express = require("express");

const {
  home,
  createUser,
  getUsers,
  deleteUsers,
  editUsers,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", home);

router.post("/createuser", createUser);

router.get("/getusers", getUsers);

router.get("/updateuser/:id", editUsers);

router.put("/deleteuser/:id", deleteUsers);

module.exports = router;
