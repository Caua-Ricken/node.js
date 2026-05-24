const Task = require('../models/Task');

module.exports ={

    async createTask(req, res) {
        let { title, description } = req.body;

        try {
            await Task.create({ title, description, done: false });
            res.redirect('/view');
        } catch (error) {
            res.status(500).json({ message: 'Error creating task', error: error.message });
        }
    },

    async getAllTasks(req, res) {

        try {
            const tasks = await Task.findAll({ raw: true });
            res.json(tasks);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching tasks', error: error.message });
        }
    },

    async getTaskById(req, res) {
        const { id } = req.params;
        try {
            const task = await Task.findOne({ where: { id: id }, raw: true });
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.json(task);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching task', error: error.message });
        }
    },


}