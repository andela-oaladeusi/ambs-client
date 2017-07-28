import axios from 'axios';

/**
 *
 *
 * @export
 * @param {any} ComposedComponent
 * @returns {any}
 */

export default class AuthApi {

  static userLogin(loginDetails) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/v1/auth/login?auth_type=normal`, loginDetails)
        .then(res => resolve(res))
        .catch(error => reject(error));
    });
  }

}