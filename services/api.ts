import axios from 'axios'

export async function addEmail(email) {
  const { data } = await axios.post('/api/save-email', email)

  return data
}

export async function getPosts() {
  return (await axios.get('/api/get-posts'))?.data?.data?.posts
}

export async function getPostById(postId) {
  return (await axios.get(`/api/get-posts/${postId}`))?.data?.post
}
