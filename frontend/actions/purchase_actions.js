import * as SessionApiUtil from '../util/session_api_util';
import {receiveUser} from '../actions/entities_actions';

export const createPurchase = ({user_id, album_id}) => (dispatch) => (
  SessionApiUtil.createPurchase({user_id, album_id}).then(
    user => dispatch(receiveUser(user)))
);

