const express = require('express');
const router = express.Router();

const TaskController = require('../../controller/TaskController');

router.post('/create', TaskController.createTask);

router.get('/all', TaskController.getAllTasks);

router.get('/all/:id', TaskController.getTaskById);

router.post('/remove/:id', TaskController.removeTask);

module.exports = router;
