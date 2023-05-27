import { BASE_URL_DATA } from '../constants';
import { getResponse} from '../../utils/utils';

class Api {
  constructor() {
    this._base_url = BASE_URL_DATA;
  }

  createBuilding(data) {
    return fetch(`${this._base_url}buildings/`, {
      method: 'POST',
      headers: { 
        Accept: "application/json", 
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data)
    })
    .then(getResponse)
  }
  
}



export const apiData = new Api();