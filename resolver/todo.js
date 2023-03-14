module.exports = {
    Query: {
        async todos(_, __, { model }) {
            return await model.find({});
        },
        async todo(_, { id }, { model }) {
            return await model.findOne({ _id: id });
        },
        async todosByRole(_, { input }, { model }) {
            return await model.find({ assignedTo: input.assignedTo});
        }
    },
}