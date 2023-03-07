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
        required: "Status of completed is required",
    }
}, {versionKey: false});

module.exports = mongoose.model("Todos", todosSchema);