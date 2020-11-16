import Axios from 'axios';
import { responseHandler } from './response-handler';

export default class FileService {

  async upload(file, parentID = null) {
    const formData = new FormData();
    formData.append('file', file);
    if (parentID) {
      formData.append('parentID', parentID);
    }

    return Axios.post('/api/file/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(responseHandler);
  }

  async fetch(parentID) {
    const params = {};
    if (parentID) {
      params.parentID = parentID;
    }
    return Axios.get('/api/file/fetch', { params }).then(responseHandler);
  }

  async fetchAll() {
    return Axios.get('/api/file/fetch-all').then(responseHandler);
  }

  async search(keyword) {
    return Axios.get('/api/file/search', {
      params: { keyword }
    }).then(responseHandler);
  }

}