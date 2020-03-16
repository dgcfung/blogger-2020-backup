import axios from 'axios'

const baseURL = 'http://localhost:3000'

// user create, CRUD'
const api = axios.create({
  baseURL: baseURL,

})


export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

const createUser = async (data) => {
  const resp = await api.post('/users', { user: data })
  return resp.data
}

const readAllUsers = async () => {
  const resp = await api.get('/users')
}

const updateUser = async (id, data) => {
  console.log(id)
  const resp = await api.put(`/users/${id}`, { data })
  return resp

}

export const readUser = async (id) => {
  const resp = await api.get(`/users/${id}`)
  return resp.data
}

const destroyUser = async (id) => {
  const resp = await api.delete(`/users/${id}`)
  return resp.data
}

const createPost = async (id, post) => {
  const res = await api.post(`/users/${id}/posts`, { post })
  return res
}

export const createComment = async (id, formValues) => {
  const res = await api.post(`/users/:${id}/comment`, { formValues })
  return res
}

const readAllUserPosts = async (id) => {
  const resp = await api.get(`/all_posts`)
  return resp.data
}

//   need check route
const readAllPosts = async () => {
  const resp = await api.get('/posts')
  return resp.data
}


const readAPost = async (id) => {
  const resp = await api.get(`/posts/${id}`)
  return resp.data
}

//   check route
const updatePost = async (post_id, post) => {
  const resp = await api.put(`/posts/${post_id}`, { post })
  return resp.data
}


const destroyPost = async (id) => {
  const resp = await api.delete(`/posts/${id}`)
  return resp.data
}


export {
  createUser,
  readAllUsers,
  updateUser,
  destroyUser,
  createPost,
  readAllUserPosts,
  readAllPosts,
  updatePost,
  readAPost,
  destroyPost,

}