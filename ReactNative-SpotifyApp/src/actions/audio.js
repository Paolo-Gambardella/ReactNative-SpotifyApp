import { Audio } from 'expo-av';
import { SET_PLAYING_STATUS, SET_PLAYING_TRACK_INFO } from '../constants';
import { showPlayerModal } from './user';

export const setPlayingStatus = (playingStatus) => (dispatch) => {
  dispatch({ type: SET_PLAYING_STATUS, playingStatus });
};

export const setPlayingTrackInfo = (trackInfo) => (dispatch) => {
  dispatch({ type: SET_PLAYING_TRACK_INFO, trackInfo });
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

  if (status.isPlaying && state.user.playingStatus !== 0) {
    dispatch(setPlayingStatus(0));
  } else if (!status.isPlaying && state.user.playingStatus === 0) {
    dispatch(setPlayingStatus(1));
  }
};

export const pauseAndPlayRecording = () => async (dispatch, getState) => {
  const state = getState();

  if (this.sound != null) {
    if (state.user.playingStatus === 0) {
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
  if (!state.user.playingTrackInfo.url) {
    dispatch(playRecording(trackInfo.url));
  } else if (
    state.user.playingTrackInfo.url &&
    trackInfo.url !== state.user.playingTrackInfo.url
  ) {
    this.sound.unloadAsync();
    dispatch(playRecording(trackInfo.url));
  }
};
