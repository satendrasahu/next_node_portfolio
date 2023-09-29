const express = require('express');
const { getHome } = require('../controller/homeController');
const route = express.Router();
route.get("/home", getHome);
module.exports = route;