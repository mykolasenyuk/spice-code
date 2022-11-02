import axios from 'axios'

export async function addEmail(email) {
  const { data } = await axios.post('/api/save-email', email)

  return data
}
