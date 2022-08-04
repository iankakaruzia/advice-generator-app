import fetch from 'cross-fetch'

class API {
  static async getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    return data.slip ?? {}
  }
}

export default API
