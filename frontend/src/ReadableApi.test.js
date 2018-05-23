import { getAllCategories } from './ReadableApi';

const apiRequest = url => fetch(url)
  .then(response => {
    return response.json();
  });

describe('testing api', () => {

  it('calls google and returns data to me', () => {
    fetchMock.get('http://google.com', { data: '12345' });

    apiRequest('http://google.com')
      .then(res => {
        expect(res.data).toBe('12345');
      });
  })
});