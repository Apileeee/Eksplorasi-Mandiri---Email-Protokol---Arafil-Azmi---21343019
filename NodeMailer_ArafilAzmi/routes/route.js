const router = require('express').Router();

const { email } = require('../EmailSender.js');

/** HTTP Request */
router.post('/send/email', email);

module.exports = router;