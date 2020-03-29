import { Audio } from 'expo-av';
import { NavigationActions } from 'react-navigation';
import client from '../utils/Axios';
import {
  GET_PLAYLISTS,
  GET_PLAYLISTS_INFO,
  resultOf,
  errorOf,
} from '../constants';

export const getPlaylists = () => (dispatch) => {
  dispatch({ type: GET_PLAYLISTS });

  client
    .get(`/browse/featured-playlists`)
    .then((response) => {
      dispatch({
        type: resultOf(GET_PLAYLISTS),
        data: response.data.playlists,
      });
    })
    .catch((error) => {
      dispatch({ type: errorOf(GET_PLAYLISTS), error });
    });
};

export const getPlaylistInfo = (playlistId) => (dispatch) => {
  dispatch({ type: GET_PLAYLISTS_INFO });

  client
    .get(`/playlists/${playlistId}`)
    .then((response) => {
      dispatch({
        type: resultOf(GET_PLAYLISTS_INFO),
        data: response.data,
      });
    })
    .catch((error) => {
      dispatch({ type: errorOf(GET_PLAYLISTS_INFO), error });
    });
};
