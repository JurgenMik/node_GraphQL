const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema/todo');
const resolvers = require('./resolver/todo');
const model = require('./models/todo');

const dotenv = require('dotenv');
dotenv.config();

// db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to DB'));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ model })
});

async function initServer() {
    await server.start();
    server.applyMiddleware({ app });

    app.listen({ port: process.env.PORT }, () =>
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    );
}

initServer();
