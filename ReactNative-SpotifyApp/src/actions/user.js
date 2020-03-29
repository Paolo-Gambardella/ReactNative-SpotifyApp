import { NavigationActions } from 'react-navigation';
import { SHOW_PLAYER_MODAL } from '../constants';
import { storeData } from '../utils/LocalStorage';

export const getToken = () => async () => {
  const res = await fetch(`https://accounts.spotify.com/api/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic OGNmNTM4MGY1ODhjNGVhMTg4NDk2ZTI1NGVkNjM3NjA6MjZjZjkxMTg2ZDdlNDBhMWI1ZmVlY2Y0NDlmNzk4MWI=`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });
  const json = await res.json();
  storeData('token', json.access_token);
};

export const showPlayerModal = () => (dispatch) => {
  dispatch({ type: SHOW_PLAYER_MODAL });
};

export const goBack = () => (dispatch) => {
  dispatch(NavigationActions.back());
};
