import axios from 'axios'

export default async function post (url, payload) {
  url = '/api/' + url
  let result = {}
  try {
    const {data} = await axios.post(url, payload)
    if (data && data.command === 'logout') {
      await axios.post('/api/user/logout')
      return window.location = '/login'
    }
    result = data
  } catch (e) {
    console.log(e)
    result.message = e.message || 'try again later'
  }
  return result
}
