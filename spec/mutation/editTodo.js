const chai = require('chai');
const expect = chai.expect;
const { request } = require('graphql-request');

const endpointUrl = 'http://localhost:4000/graphql';

describe('GraphQL editTodo mutation endpoint', () => {
    it('should edit an existing todo', async () => {
        const mutation = `
            mutation editTodo($editTodoId: ID!, $input: UpdateTodoInput!) {
                editTodo(id: $editTodoId, input: $input) {
                    id
                    completed
                }
            }
        `;
        const variables = {
            editTodoId: '6410c8f21e8173959418a3ac',
            input: {
                completed: true
            }
        };

        const data = await request(endpointUrl, mutation, variables);
        expect(data).to.deep.equal({
            "editTodo": {
                "id": "6410c8f21e8173959418a3ac",
                "completed": true
            }
        });

    });
});