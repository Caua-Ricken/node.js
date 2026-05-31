const express = require('express');
const router = express.Router();

const TaskController = require('../../controller/TaskController');

router.post('/create', TaskController.createTask);

router.get('/all', TaskController.getAllTasks);

router.get('/all/:id', TaskController.getTaskById);

router.post('/remove/:id', TaskController.removeTask);

router.get('/edit/:id', TaskController.editTask);

router.post('/update', TaskController.updateTask);

router.post('/complete/:id', TaskController.completeTask);

module.exports = router;
