const { Router } = require("express");
const { Activity, Country } = require("../db");
const {
  getDbActivities,
  postActivity,
  getActivityById,
} = require("../controllers/activity.controller");
const { getCountry2 } = require("../controllers/countries.controller");
const router = Router();

// Se postea algo como esto {
//      "name": "Fly", "difficulty": "5", "duration": "1:00:09", "season": "spring"
// }

// post a -> http://localhost:3001/activity
router.post("/", postActivity);
// get a -> http://localhost:3001/activity/:id
router.get("/:idActivity", getActivityById);

module.exports = router;
