const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({
    assignedTo: {
        type: String,
        required: "Assignee is required",
    },
    activity: {
        type: String,
        required: "Activity is required",
    },
    completed: {
        type: Boolean,
    }
}, {versionKey: false});

module.exports = mongoose.model("Todos", todosSchema);