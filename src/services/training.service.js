import Axios from 'axios';
import { responseHandler } from './response-handler';

export default class TrainingService {

  async train(pdf, pages, categoryKey) {
    const formData = new FormData();
    formData.append('file', pdf);
    formData.append('pages', pages);
    formData.append('categoryKey', categoryKey);
    return Axios.post('/api/training/train', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(responseHandler);
  }

  async fetch(categoryKey) {
    return Axios.get('/api/training/fetch', {
      params: {
        categoryKey
      }
    }).then(responseHandler);
  }

  async unlearn(trainingID) {
    return Axios.delete(`/api/training/unlearn/${trainingID}`).then(responseHandler);
  }
}
