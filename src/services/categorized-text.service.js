import Axios from 'axios';
import { responseHandler } from './response-handler';

export default class CategorizedTextService {
  async fetch(categoryKey) {
    return Axios.get(`api/categorized-text/fetch/${categoryKey}`).then(responseHandler);
  }
}
