const express = require("express");
const router = express.Router();
const {
  getAll,
  getOne,
  addUser,
  deleteUser,
  updateUser
} = require("../controller/user");

router.get("/",getAll);
router.get("/name",getOne)
router.post("/", addUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
