import { BASE_URL_DATA } from "../constants";
import { getResponse } from "../utils";

class Profiles {
  constructor() {
    this._base_url = BASE_URL_DATA;
  }

  getProfileDataLandlord(id) {
    return fetch(`${this._base_url}landlord_profile/${id}/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(getResponse);
  }

  postProfileDataLandlord(data) {
    return fetch(`${this._base_url}landlord_profile/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },body: JSON.stringify(data)
      
    }).then(getResponse);
  }

}

export const apiProfiles = new Profiles();
