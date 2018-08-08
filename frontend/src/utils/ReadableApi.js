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

export const processRequest = (url, header = headers) =>
  fetch(url, { headers: header }).then(res => res.json());

export const fetchAllCategories = () => processRequest(`${api}/categories`)

export const fetchPostsForCategory = category => processRequest(`${api}/${category}/posts`)

export const fetchAllPosts = () => processRequest(`${api}/posts`)

export const fetchPost = postId => processRequest(`${api}/posts/${postId}`)

export const fetchPostComments = postId => processRequest(`${api}/posts/${postId}/comments`)

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
