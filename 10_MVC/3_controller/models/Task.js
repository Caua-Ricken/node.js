const { DataTypes } = require('sequelize');
const conn = require('../db/conn');

const Task = conn.define('Task', {
    title: {
        type: DataTypes.STRING,
        require: true
    },
    description: {
        type: DataTypes.STRING,
        require: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        require: true
    },
})

module.exports = Task;