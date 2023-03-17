const chai = require('chai');
const expect = chai.expect;
const { request } = require('graphql-request');

const endpointUrl = 'http://localhost:4000/graphql';

describe('GraphQL deleteTodo mutation endpoint', () => {
    it('should delete a todo', async () => {
        const mutation = `
            mutation deleteTodo($todoId: ID!) {
                deleteTodo(id: $todoId) 
            }
        `;
        const variables = { todoId: '6414d2f7c8755a8c2b94f561' };

        const data = await request(endpointUrl, mutation, variables);
        expect(data).to.have.property('deleteTodo', true);
    });
});