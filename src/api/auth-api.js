import axios from 'axios'
import config from '../config'

/*
 * Login user with credentials
 */
export const loginWithCredentials = (username, password) => {
  const data = {username: username, password: password}
  console.log('user', data, `${config.api.login}`)

  return axios.post(`${config.api.login}`, data)
              .then(response => response.data)
/*
  return axios.get(`${config.api.placeholder}`)
              .then(response => response.data)
*/
}
