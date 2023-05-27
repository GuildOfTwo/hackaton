import { BASE_URL_AUTH } from './constants';
import { getResponse} from './utils';

class Api {
  constructor() {
    this._base_url = BASE_URL_AUTH;
  }

  register(data) {
    return fetch(`${this._base_url}users/`, {
      method: 'POST',
      headers: { 
        Accept: "application/json", 
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data)
    })
    .then(getResponse)
  }
  
  login(data) {
    return fetch(`${this._base_url}token/login/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(getResponse)
  }

  logout(token) {
    return fetch(`${this._base_url}token/logout/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization:`token ${token}`
      },
    })
    .then(getResponse)
  }

  
  getUserData(token) {
    return fetch(`${this._base_url}users/me/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        authorization:`token ${token}`
      },
    
    })
    .then(getResponse)
  }




  // updateTokens(token) {
  //   return fetch(`${this._base_url}/auth/token/`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       "token": token
  //     })
  //   })
  //   .then(getResponse)
  //   .then(res => {
  //     localStorage.setItem('refresh', res.refreshToken);
  //     localStorage.setItem('token', res.accessToken);
  //   })
  //   .catch((err) => console.log(err.status))
  // }


  // getUserInfo() {
  //   return fetch(`${this._base_url}user/`, {
  //     method: 'GET',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     credentials: 'same-origin',
  //     headers: {
  //       'Content-type': 'application/json',
  //       Authorization: `${localStorage.getItem('token')}`
  //     },
  //     redirect: 'follow',
  //     referrerPolicy: 'no-referrer'
  //   })
  //   .then((res) => res.json())
  //   .then(data => data)
  // }

}



export const apiAuth = new Api();
