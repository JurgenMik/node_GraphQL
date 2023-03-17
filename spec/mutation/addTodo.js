const chai = require('chai');
const expect = chai.expect;
const { request } = require('graphql-request');

const endpointUrl = 'http://localhost:4000/graphql';

describe('GraphQL addTodo mutation endpoint', () => {
    it('should create a new todo', async () => {
        const mutation = `
            mutation addTodo($input: NewTodoInput!) {
                addTodo(input: $input) {
                    id
                    activity
                    assignedTo
                }
            }
        `;
        const variables = {
            input: {
                assignedTo: 'dev',
                activity: 'Refactor: forms'
            }
        };

        const data = await request(endpointUrl, mutation, variables);

        expect(data).to.have.property('addTodo');
        expect(data.addTodo).to.have.property('id');
        expect(data.addTodo.activity).to.equal('Refactor: forms');
    });
});
