import Axios from 'axios';
import { responseHandler } from "./response-handler";
import { TOKEN_KEY } from '../constants';

export default class AuthService {
  register(newUser) {
    return Axios.post('/api/auth/register', newUser).then(responseHandler);
  }

  login(username, password, userType) {
    return Axios.post('/api/auth/login', { username, password, userType }).then(responseHandler);
  }

  authUser() {
    return Axios.get('/api/auth/user').then(responseHandler);
  }

  setToken(token) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  }

  getToken() {
    return JSON.parse(localStorage.getItem(TOKEN_KEY));
  }

  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  }
}
