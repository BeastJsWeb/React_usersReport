import axios from 'axios'

const API_URL = 'http://127.0.0.1:3000'

export default class userService {
  static async getAll() {
    const res = await axios.get(API_URL)
    return res.data
  }
  static async getUser(user) {
    const res = await axios.get(`${API_URL}?term=${user}`)
    return res.data
  }
}