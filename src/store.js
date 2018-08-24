import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

export function reducer(state, action = {}) {
  switch(action.type) {
    //case "MESSAGES_LOADING_FULFILLED":
      //return Object.assign({}, state, { messages: action.payload })
    case "MEMBERS_LOADING_FULFILLED":
      return Object.assign({}, state, { members: action.payload})
    case "SORT_MESSAGES_FULFILLED":
      const sortByKey = key => (a, b) => Date.parse(a[key]) - Date.parse(b[key])
      const sorted = action.payload.slice().sort(sortByKey('timestamp'))
      return Object.assign({}, state, { messages: [...sorted] })
    default:
      return state;
}
};

export const store = createStore(reducer, {}, applyMiddleware(
  promiseMiddleware()
));

