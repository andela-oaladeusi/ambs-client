import axios from 'axios';

/**
 *
 *
 * @export
 * @param {any} ComposedComponent
 * @returns {any}
 */

export default class HomeApi {

  static getAll() {
    return new Promise((resolve, reject) => {
      axios.get('https://andela-dms.herokuapp.com/')
        .then(res => resolve(res))
        .catch(error => reject(error));
    });
  }

}