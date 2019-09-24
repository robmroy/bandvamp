import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const SearchesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.searchResults;
    default:
      return oldState;
  }
};

export default SearchesReducer;
