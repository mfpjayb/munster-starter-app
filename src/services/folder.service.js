import Axios from 'axios';
import { responseHandler } from './response-handler';

export default class FolderService {
  async fetch(parentID = null) {
    return Axios.get('/api/directory/fetch', { params: { parentID } }).then(responseHandler);
  }

  async newFolder(parentID) {
    return Axios.post('/api/directory/new-folder', {
      parentID
    }).then(responseHandler);
  }

  async delete(folderId) {
    return Axios.delete(`/api/directory/delete/${folderId}`).then(responseHandler);
  }

  async rename(folderId, name) {
    return Axios.put(`/api/directory/rename/${folderId}`, { name })
      .then(responseHandler);
  }
}
