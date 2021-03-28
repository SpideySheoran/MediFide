const router = require("express").Router()

var Appointment = require('../models/appointment');
Appointment.methods(['get', 'put', 'post', 'delete']);
Appointment.register(router, '/appointments');

// Return router
module.exports = router;