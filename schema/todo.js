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
    
    type Query {
        todos: [Todo]!
        todo(id: ID!): Todo!
        todosByRole(input: TodoInput): [Todo]!
        todosByActivity(input: TodoInput): [Todo]!
    }
`

module.exports = typeDefs;