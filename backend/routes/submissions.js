const express = require('express');
const router = express.Router();
const submissionsController = require('../controllers/submissionsController');

router.post('/', submissionsController.createSubmission);
router.get('/', submissionsController.getAllSubmissions);

module.exports = router;
