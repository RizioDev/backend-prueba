const { Router } = require("express");
const router = Router();
const {
  getCountry,
  getById,
} = require("../controllers/countries.controller.js");

// get a -> http://localhost:3001/countries/
router.get("/", getCountry);

// get a -> http://localhost:3001/countries/:id
router.get("/:id", getById);

module.exports = router;
