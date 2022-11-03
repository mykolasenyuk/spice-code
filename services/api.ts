import axios from 'axios'

export async function addEmail(email) {
  try {
    const { data } = await axios.post('/api/save-email', email)

    return data
  } catch (error) {
    console.log(error)
  }
}
