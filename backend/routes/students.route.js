const express = require('express');
const router = express.Router();

const {getAllStudents, createStudent} = require('../controllers/students.controller')

router.route('/').get(getAllStudents).post(createStudent);

module.exports = router;
