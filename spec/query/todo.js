const chai = require('chai');
const expect = chai.expect;
const {request} = require('graphql-request');

const endpointUrl = 'http://localhost:4000/graphql';

describe('GraphQL todo query endpoint', () => {
    it('should return an (ID) specific todo', async () => {
        const query = `
          query Todo($todoId: ID!) {
          todo(id: $todoId) {
            assignedTo
            activity
            id
          }
        }
    `;
        const variables = { todoId: '6410c8f21e8173959418a3ac' };

        const data = await request(endpointUrl, query, variables);
        expect(data.todo.id).equal('6410c8f21e8173959418a3ac');
    });
});