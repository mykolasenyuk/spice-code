import axios from 'axios'

export async function addEmail(email) {
  const { data } = await axios.post('/api/save-email', email)

  return data
}

export async function getPosts() {
  try {
    const posts = await axios
      .get('/api/get-posts')
      .then(({ data }) => data.data.posts)
    return posts
    // console.log(data)
  } catch (error) {
    console.error(error)
  }
}

export async function getPostById(postId) {
  return (await axios.get(`/api/get-posts/${postId}`))?.data?.post
}
