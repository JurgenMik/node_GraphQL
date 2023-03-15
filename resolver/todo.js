module.exports = {
    Query: {
        async todos(_, __, { model }) {
            return await model.find({});
        },
        async todo(_, { id }, { model }) {
            return await model.findOne({ _id: id });
        },
        async todosByRole(_, { input }, { model }) {
            return await model.find({ assignedTo: input.assignedTo });
        },
        async todosByActivity(_, { input }, { model }) {
            return await model.find({ activity: new RegExp(input.activity) });
        }
    },
    Mutation: {
        async addTodo(_, { input }, { model }) {
            let todo = {...input, completed: false};

            return await model.create(todo);
        },
        async deleteTodo(_, { id }, { model }) {
            await model.findOneAndDelete({ _id: id});

            return true;
        },
        async editTodo(_, { id, input }, { model }) {
            let todo = await model.findOneAndUpdate({ _id: id }, input, {
                new: true,
            });

            if (!todo) { return await model.create(input); }

            return todo;
        }
    }
}