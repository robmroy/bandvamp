
import merge from 'lodash/merge';

import { RECEIVE_BAND} from '../actions/entities_actions';

const bandsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BAND:
      return merge({}, state, { [action.band.id]: action.band });
    default:
      return state;
  }
}

export default bandsReducer;