const axios = require('axios');
const server = 'http://localhost:8080'
describe('Node API is connected to HR API Server', () => {
  test('Expect the server to respond with Success 200 on a GET request', () => {
    return axios.get(server)
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('Success');
      });
  });