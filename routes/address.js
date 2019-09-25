const express = require("express");
const router = express.Router();
const {addAddress} = require ("../controller/address");

router.post("/", addAddress);

module.exports = router;
