import axios from 'axios'
import config from '../config'

/*
 * Login user with credentials
 */
export const loginWithCredentials = (username, password) => {
  const data = {username: username, password: password}

  return axios.post(`${config.api.login}`, data)
              .then(response => response.data)
}

export const logout = () => (
  axios.get(`${config.api.logout}`)
       .then(response => response.data)
)
