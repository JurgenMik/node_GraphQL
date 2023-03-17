const chai = require('chai');
const expect = chai.expect;
const { request } = require('graphql-request');

const endpointUrl = 'http://localhost:4000/graphql';

describe('GraphQL todos query endpoint', () => {
    it('should return an array of todos', async () => {
        const query = `
          query Todos {
          todos {
            assignedTo
            activity
            id
          }
        }
    `;
        const data = await request(endpointUrl, query);
        expect(data).to.deep.equal({
            "todos": [
                {
                    "assignedTo": "projectManager",
                    "activity": "Jira ticket coverage update",
                    "id": "6410c8f21e8173959418a3ac"
                },
                {
                    "assignedTo": "dev",
                    "activity": "Feature: reset password",
                    "id": "6410ca09b16059fdc370c097"
                },
                {
                    "assignedTo": "projectManager",
                    "activity": "database sync/cleanup",
                    "id": "6410ca31acd8d5633118689a"
                }
            ]
        });
    });
});