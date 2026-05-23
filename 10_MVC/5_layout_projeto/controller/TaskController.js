const Task = require('../models/Task');

module.exports ={

    async createTask(req, res) {
        let { title, description, done } = req.body;

        if (done === 'on') {
            done = true;
        } else {
            done = false;
        }

        try {
            await Task.create({ title, description, done });
            res.redirect('/');
        } catch (error) {
            res.status(500).json({ message: 'Error creating task', error: error.message });
        }
    },

    async getAllTasks(req, res) {
     
    }


    
}