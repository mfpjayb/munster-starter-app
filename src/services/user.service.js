import Axios from 'axios';
import { responseHandler } from './response-handler';

export default class UserService {
  fetch() {
    return Axios.get('/api/user/fetch').then(responseHandler);
  }

  disable(user) {
    return Axios.put(`/api/user/disable/${user._id}`, { user }).then(responseHandler);
  }
}