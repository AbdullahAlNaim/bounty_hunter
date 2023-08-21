const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    threat_level: {
        type: String,
    },
    look: {
        type: Image,
    },
    task: {
        type: String,
    }
})

module.exports = mongoose.model('todayTask', taskSchema)