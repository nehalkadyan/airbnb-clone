const express = require("express");
const { places } = require("../controllers/accomodation.controller");

const router = express.Router();

router.post("/places", places);

module.exports = router;
