const express = require('express');
const { getShareImagePage } = require('../controller/shareController');

const router = express.Router();

router.route('/share/:path(*)').get(getShareImagePage);

module.exports = router