const express = require("express");
const router= express.Router();


const meController = require('../app/controllers/meController');

router.get("/courses/store", meController.show);

module.exports= router;