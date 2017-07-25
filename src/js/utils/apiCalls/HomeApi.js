import axios from 'axios';

/**
 *
 *
 * @export
 * @param {any} ComposedComponent
 * @returns {any}
 */

export default class HomeApi {

  static getAll(code) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/v1/auth/login?code=${code}&auth_type=facebook`)
        .then(res => resolve(res))
        .catch(error => reject(error));
    });
  }

  static getGoogle(code) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/v1/auth/login?code=${code}&auth_type=google`)
        .then(res => resolve(res))
        .catch(error => reject(error));
    });
  }

}