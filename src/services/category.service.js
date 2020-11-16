import Axios from 'axios';
import { responseHandler } from './response-handler';

export default class CategoryService {

  async create(category, categoryKey) {
    return Axios.post('/api/category/create', { category, categoryKey }).then(responseHandler);
  }

  async fetch() {
    return Axios.get('/api/category/fetch').then(responseHandler);
  }

  async show(categoryKey) {
    return Axios.get(`/api/category/show/${categoryKey}`).then(responseHandler);
  }

  async remove(categoryId) {
    return Axios.delete(`/api/category/remove/${categoryId}`).then(responseHandler);
  }

}
