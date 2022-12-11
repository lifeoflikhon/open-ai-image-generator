const express = require('express');
const { generateImage } = require('./../controllers/open-ai.controller');

const router = express.Router();

router.post('/generate-image', generateImage);

module.exports = router;