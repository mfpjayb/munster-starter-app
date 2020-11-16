import Axios from 'axios';
import { responseHandler } from './response-handler';

export default class RegistrationTokenService {
  async create(token) {
    return Axios.post('/api/registration-token/create', { token }).then(responseHandler);
  }

  async fetch() {
    return Axios.get('/api/registration-token/fetch').then(responseHandler);
  }

  async remove(tokenId) {
    return Axios.delete(`/api/registration-token/remove/${tokenId}`).then(responseHandler);
  }
}