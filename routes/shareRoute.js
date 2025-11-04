const express = require('express');
const { getShareImagePage } = require('../controller');

const router = express.Router();

router.route('/share/*').get(getShareImagePage);

module.exports = router