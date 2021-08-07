const axios = require('axios');
const server = 'http://localhost:3000/'
describe('Node Server is open and listening', () => {
  test('Expect response with Success 200 on \'/testing\' GET request', () => {
    return axios.get(server + 'testing')
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.data).toBe('Success');
      });
  });
  test('Expect response with Success 200 on \'/\' GET request', () => {
    return axios.get(server)
      .then((response) => {
        expect(response.status).toBe(200);
      });
  });
  test('Expect response with Success 200 on \'/products\' GET request', () => {
    return axios.get(server + 'products')
      .then((response) => {
        expect(response.status).toBe(200);
      });
  });
  test('Expect response with Success 200 on \'/reviews\' GET request', () => {
    return axios.get(server + 'reviews?product_id=19093')
      .then((response) => {
        expect(response).toBeDefined();
        expect(response.status).toBe(200);
      });
  });
  test('Expect response with Success 200 on \'/qa/questions\' GET request', () => {
    return axios.get(server + 'qa/questions?product_id=19093')
      .then((response) => {
        expect(response).toBeDefined();
        expect(response.status).toBe(200);
      });
  });
});