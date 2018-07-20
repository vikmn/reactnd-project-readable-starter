const api = "http://localhost:3001";

// Generate a unique token for storing your readable data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token
};

export const clientRequest = (url, header = headers) => fetch(url, { headers: header })
  .then(response => {
    return response.json();
  });

export const getAllCategories = () =>
  clientRequest(`${api}/categories`)


export const getCategoryPosts = category =>
  clientRequest(`${api}/${category}/posts`)
    .then(data => data)

export const getAllPosts = () =>
  clientRequest(`${api}/posts`)
    .then(data => data)
      
export const getPost = postId =>
  clientRequest(`${api}/posts/${postId}`)
    .then(data => data.data)

export const updatePost = (post) =>
fetch(`${api}/posts/${post.id}`, {
    method: "PUT",
    headers: {
        ...headers,
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ post })
  }).then(res => res.json())

export const addPost = post =>
  fetch(`${api}/posts`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
        },
    body: JSON.stringify({ post })
  })
    .then(res => res.json())
    .then(data => data.post)

export const addVoteToPost = (post, vote) =>
  fetch(`${api}/posts/${post.id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
        },
    body: JSON.stringify({ option:vote })
  })
    .then(res => res.json())
        .then(data => data.post)

export const getPostComments = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data.comments)