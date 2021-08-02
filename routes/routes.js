const express = require('express');
const router = express.Router();

const { saludo, radar } = require('../controllers/controller');

router.get('/', saludo);
router.post('/radar', radar);

module.exports = router;