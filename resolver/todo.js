module.exports = {
    Query: {
        async todos(_, __, { model }) {
            return await model.find({});
        }
    },
}