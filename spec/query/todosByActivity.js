const chai = require('chai');
const expect = chai.expect;
const { request } = require('graphql-request');

const endpointUrl = 'http://localhost:4000/graphql';

describe('GraphQL todosByActivity query endpoint', () => {
    it('should return a filtered array of todos', async () => {
        const query = `
          query TodosByActivity($input: TodoInput) {
          todosByActivity(input: $input) {
            assignedTo
            id
          }
        }
    `;
        const variables = { input: { activity: 'database' } };

        const data = await request(endpointUrl, query, variables);
        expect(data).to.deep.equal({
            "todosByActivity": [
                {
                    "id": "6410ca31acd8d5633118689a",
                    "assignedTo": "projectManager"
                }
            ]
        });
    });
});