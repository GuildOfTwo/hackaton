import { BASE_URL_DATA } from '../constants';
import { getResponse} from '../utils';

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

  postComment(data) {
    console.log(data)
    return fetch(`${this._base_url}comments/`, {
      method: 'POST',
      headers: { 
        Accept: "application/json", 
        "Content-Type": "application/json", 
        authorization:`token fefc81750f24b613de8605feb3da8c948fdd3f1c`
      },
      body: JSON.stringify(data)
    })
    .then(getResponse)
  }
}



export const apiComments = new Comments();
