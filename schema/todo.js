const { gql } = require('apollo-server-express');

const typeDefs = gql`
    
    enum Role {
        dev
        projectManager
    }
    
    type Todo {
        id: ID!,
        assignedTo: Role!,
        activity: String!,
        completed: Boolean!
    }
    
    input TodoInput {
        assignedTo: Role
        activity: String
    }
    
    input NewTodoInput {
        assignedTo: Role!
        activity: String!
    }
    
    type Query {
        todos: [Todo]!
        todo(id: ID!): Todo!
        todosByRole(input: TodoInput): [Todo]!
        todosByActivity(input: TodoInput): [Todo]!
    }
    
    type Mutation {
        addTodo(input: NewTodoInput!): Todo!
    }
`

module.exports = typeDefs;