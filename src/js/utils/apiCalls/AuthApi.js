import axios from 'axios';

/**
 *
 *
 * @export
 * @param {any} ComposedComponent
 * @returns {any}
 */

export default class AuthApi {

  static confirmAccount(loginDetails, token) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/v1/auth/login?confirmation_token=${token}`, loginDetails)
        .then(res => resolve(res))
        .catch(error => reject(error));
    });
  }

  static normalUserLogin(loginDetails) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/v1/auth/login?auth_type=normal`, loginDetails)
        .then(res => resolve(res))
        .catch(error => reject(error));
    });
  }

  static facebookUserLogin(code) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/v1/auth/login?code=${code}&auth_type=facebook`)
        .then(res => resolve(res))
        .catch(error => reject(error));
    });
  }

  static googleUserLogin(code) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/v1/auth/login?code=${code}&auth_type=google`)
        .then(res => resolve(res))
        .catch(error => reject(error));
    });
  }

  static userRegistration(registrationDetails) {
    const redirect_url = 'http://localhost:3000/auth/account/confirmation';
    return new Promise((resolve, reject) => {
      axios.post(`/api/v1/auth/register?redirect_url=${redirect_url}`, registrationDetails)
        .then(res => resolve(res))
        .catch(error => reject(error));
    });
  }

  static getMyInformation() {
    return new Promise((resolve, reject) => {
      axios.get(`/api/v1/users/information/me`)
        .then(res => resolve(res))
        .catch(error => reject(error));
    });
  }
}