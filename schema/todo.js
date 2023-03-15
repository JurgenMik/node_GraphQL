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
    
    input UpdateTodoInput {
        assignedTo: Role
        activity: String
        completed: Boolean
    }
    
    type Query {
        todos: [Todo]!
        todo(id: ID!): Todo!
        todosByRole(input: TodoInput): [Todo]!
        todosByActivity(input: TodoInput): [Todo]!
    }
    
    type Mutation {
        addTodo(input: NewTodoInput!): Todo!
        deleteTodo(id: ID!): Boolean!
        editTodo(
            id: ID!,
            input: UpdateTodoInput
        ): Todo!
        
    }
`

module.exports = typeDefs;