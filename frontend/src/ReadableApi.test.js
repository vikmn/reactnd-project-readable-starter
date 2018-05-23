import { getAllCategories } from './ReadableApi';

const apiRequest = (url, header) => fetch(url, { headers: header })
  .then(response => {
    return response.json();
  });

const headers = {
    Accept: "application/json",
    Authorization: "token"
};

describe('calling the api with header', () => {
  fetchMock
  .get('http://google.com', { data: '12345' }, { headers })
  .catch({});
  
  it('returns data for matching url and header', () => {
    apiRequest('http://google.com', headers)
      .then(res => {
        expect(res.data).toBe('12345');
      });
  });
  
  it('returns no data for not matching url and/or header', () => {

    const incorrectHeader = {
      Accept: "application/json",
      Authorization: "tokens"
    };

    apiRequest('http://google.com', incorrectHeader)
      .then(res => {
        expect(res.data).toBe(undefined);
      });
  });
});