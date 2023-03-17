const chai = require('chai');
const expect = chai.expect;
const { request } = require('graphql-request');

const endpointUrl = 'http://localhost:4000/graphql';

describe('GraphQL todosByRole query endpoint', () => {
    it('should return a filtered array of todos', async () => {
        const query = `
          query TodosByRole($input: TodoInput) {
          todosByRole(input: $input) {
            assignedTo
            activity
            id
          }
        }
    `;
        const variables = { input: { assignedTo: 'dev' } };

        const data = await request(endpointUrl, query, variables);
        expect(data).to.deep.equal({
            "todosByRole": [
                {
                    "assignedTo": "dev",
                    "activity": "Feature: reset password",
                    "id": "6410ca09b16059fdc370c097"
                }
            ]
        });
    });
});