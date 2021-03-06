import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import reduxImmutableStateVariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

/**
 *
 *
 * @export
 * @param {any} initialState
 * @returns {object} store object
 */

export default function storeConfig(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(reduxImmutableStateVariant(), thunk)
    )
  );
}
