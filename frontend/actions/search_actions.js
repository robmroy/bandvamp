import { fetchSearchResults } from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const search = (query) => (dispatch) => (
  fetchSearchResults(query).then(
    results => dispatch(receiveSearchResults(results)))
);

export const receiveSearchResults = (searchResults) => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});
