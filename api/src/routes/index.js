const { Router } = require('express');
// const axios = require('axios')
// const {Country, Activity, country_activity} = require('../db.js')
// const {Op} = require('sequelize')
const CountriesRoutes = require('./countries.js')
const ActivitiesRoutes = require('./activities.js')

const router = Router();

router.use('/countries', CountriesRoutes)
router.use('/activity', ActivitiesRoutes)

module.exports = router;