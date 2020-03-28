import { Audio } from 'expo-av';
import { NavigationActions } from 'react-navigation';
import client from '../utils/Axios';
import {
  GET_PLAYLISTS,
  GET_PLAYLISTS_INFO,
  SET_PLAYING_STATUS,
  SET_PLAYING_TRACK_INFO,
  SHOW_PLAYER_MODAL,
  GET_ARTISTS,
  RESET_SEARCH,
  resultOf,
  errorOf,
} from '../constants';
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

export const getPlaylists = () => (dispatch) => {
  dispatch({ type: GET_PLAYLISTS });

  client
    .get(`/browse/featured-playlists`)
    .then((response) => {
      dispatch({
        type: resultOf(GET_PLAYLISTS),
        data: response.data,
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

export const setPlayingStatus = (playingStatus) => (dispatch) => {
  dispatch({ type: SET_PLAYING_STATUS, playingStatus });
};

export const setPlayingTrackInfo = (trackInfo) => (dispatch) => {
  dispatch({ type: SET_PLAYING_TRACK_INFO, trackInfo });
};

export const showPlayerModal = () => (dispatch) => {
  dispatch({ type: SHOW_PLAYER_MODAL });
};

const playRecording = (uri) => async (dispatch) => {
  const { sound } = await Audio.Sound.createAsync(
    { uri },
    {
      shouldPlay: true,
      isLooping: true,
    },
    updateScreenForSoundStatus
  );
  this.sound = sound;
  dispatch(setPlayingStatus(0));
};

const updateScreenForSoundStatus = (status) => (dispatch, getState) => {
  const state = getState();

  if (status.isPlaying && state.reducer.playingStatus !== 0) {
    dispatch(setPlayingStatus(0));
  } else if (!status.isPlaying && state.reducer.playingStatus === 0) {
    dispatch(setPlayingStatus(1));
  }
};

export const pauseAndPlayRecording = () => async (dispatch, getState) => {
  const state = getState();

  if (this.sound != null) {
    if (state.reducer.playingStatus === 0) {
      await this.sound.pauseAsync();
      dispatch(setPlayingStatus(1));
    } else {
      await this.sound.playAsync();
      dispatch(setPlayingStatus(0));
    }
  }
};

export const play = (trackInfo) => (dispatch, getState) => {
  const state = getState();

  dispatch(showPlayerModal());
  dispatch(setPlayingTrackInfo(trackInfo));
  if (!state.reducer.playingTrackInfo.url) {
    dispatch(playRecording(trackInfo.url));
  } else if (
    state.reducer.playingTrackInfo.url &&
    trackInfo.url !== state.reducer.playingTrackInfo.url
  ) {
    this.sound.unloadAsync();
    dispatch(playRecording(trackInfo.url));
  }
};

export const goBack = () => (dispatch) => {
  dispatch(NavigationActions.back());
};

export const getArtists = (search) => (dispatch) => {
  client
    .get(`/search?type=artist&q=${encodeURIComponent(search)}`)
    .then((response) => {
      dispatch({
        type: resultOf(GET_ARTISTS),
        data: response.data.artists,
      });
    })
    .catch((error) => {
      dispatch({ type: errorOf(GET_ARTISTS), error });
    });
};
