import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.adviceslip.com'
})

class API {
  static async getAdvice() {
    const { data } = await api.get('advice', {
      params: {
        time: Date.now() // Prevent browser caching
      }
    })
    return data.slip ?? {}
  }
}

export default API
