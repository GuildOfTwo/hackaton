import { BASE_URL_DATA } from './constants';
import { getResponse} from './utils';

class Comments {
  constructor() {
    this._base_url = BASE_URL_DATA;
  }

  getCommentsList() {
    return fetch(`${this._base_url}comments/`, {
      method: 'GET',
      headers: { 
        Accept: "application/json", 
        "Content-Type": "application/json", 
      }
    })
    .then(getResponse)
  }
}



export const apiComments = new Comments();
