import { BASE_URL_OBJECTS } from './constants';
import { getResponse} from './utils';

class Objects {
  constructor() {
    this._base_url = BASE_URL_OBJECTS;
  }

  getObjectsList() {
    return fetch(`${this._base_url}buildings/`, {
      method: 'GET',
      headers: { 
        Accept: "application/json", 
        "Content-Type": "application/json", 
      }
    })
    .then(getResponse)
  }
  
 

}



export const apiObjects = new Objects();
