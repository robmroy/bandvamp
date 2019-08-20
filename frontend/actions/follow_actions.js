import * as SessionApiUtil from '../util/session_api_util';
import {receiveUser} from '../actions/entities_actions';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const createFollow = ({band_id, fan_id}) => (dispatch) => (
  SessionApiUtil.createFollow({band_id, fan_id}).then(
    user => dispatch(receiveUser(user)))
);

export const deleteFollow = ({band_id, fan_id}) => (dispatch) => (
    SessionApiUtil.deleteFollow({band_id, fan_id}).then(
      user => dispatch(receiveUser(user)))
  );