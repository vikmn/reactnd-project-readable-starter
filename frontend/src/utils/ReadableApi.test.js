import { getAllCategories, clientRequest, getCategoryPosts, getAllPosts, getPost } from './ReadableApi';

const headers = {
    Accept: "application/json",
    Authorization: "token"
};

describe('calling the api with header', () => {
  fetchMock
  .get('http://google.com', { data: '12345' }, { headers })
  .catch({});
  
  it('returns data for matching url and header', () => {
    clientRequest('http://google.com', headers)
      .then(res => {
        expect(res.data).toBe('12345');
      });
  });
  
  it('returns no data for not matching url and/or header', () => {

    const incorrectHeader = {
      Accept: "application/json",
      Authorization: "tokens"
    };

    clientRequest('http://google.com', incorrectHeader)
      .then(res => {
        expect(res.data).toBe(undefined);
      });
  });

  it('returns all categories', () => {
    fetchMock.get('http://localhost:3001/categories',
      { categories: [{ name: "12345", path: "12345" }] });

    getAllCategories()
      .then(res => {
        expect(res.categories).toEqual([{ name:"12345", path:"12345"}]);
      });
    });
  
  it('returns all posts for a specified category', () => {
    fetchMock.get('http://localhost:3001/categoryId/posts', { data: "12345" });

    getCategoryPosts("categoryId")
      .then(res => {
        expect(res.data).toBe("12345");
      });
  });

  it('returns all posts', () => {
    fetchMock.get('http://localhost:3001/posts', { data: "12345" });

    getAllPosts()
      .then(res => {
        expect(res.data).toBe("12345");
      });
    });
  
  it('returns specified post', () => {
    fetchMock.get('http://localhost:3001/posts/postId', { data: { post: "12345" } });

    getPost("postId")
      .then(res => {
        expect(res.post).toBe("12345");
      });
    });
});