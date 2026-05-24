const Task = require('../models/Task');

module.exports ={

    async createTask(req, res) {
        let { title, description } = req.body;

        try {
            await Task.create({ title, description, done: false });
            res.redirect('/');
        } catch (error) {
            res.status(500).json({ message: 'Error creating task', error: error.message });
        }
    },

    async getAllTasks(req, res) {
     
    }


    
}