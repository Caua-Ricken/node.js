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

    async removeTask(req, res) {
        const { id } = req.params;
        try {
            const deleted = await Task.destroy({ where: { id: id }});
            if (deleted) {
                res.redirect('/view');
            } else {
                res.status(404).json({ message: 'Task not found' });
            };
        } catch (error) {
                res.status(500).json({ message: 'Error deleting task', error: error.message });
        }
    },

    async editTask(req, res) {
        const { id } = req.params;
        try {
            const task = await Task.findOne({ where: { id: id }, raw: true});
            if (task) {
                res.json(task);
            } else {
                res.status(404).json({ message: 'Task not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching task', error: error.message });
        }
    },

    async updateTask(req, res) {
        const { id, title, description } = req.body;

        try {
            const update = await Task.update({ title, description }, { where: { id: id }});
            if (update[0] === 1) {
                res.redirect('/view');
            } else {
                res.status(404).json({ message: 'Task not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating task', error: error.message });
        }
    },
     


}