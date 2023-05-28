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
    return fetch(`${this._base_url}comments/`, {
      method: 'POST',
      headers: { 
        Accept: "application/json", 
        "Content-Type": "application/json", 
        authorization:`token 278db318f019381fe0994e2f751ea8cae1780466`
      },
      body: JSON.stringify(data)
    })
    .then(getResponse)
  }
}



export const apiComments = new Comments();
