import {
  SHOW_PLAYER_MODAL,
  SET_PLAYING_STATUS,
  SET_PLAYING_TRACK_INFO,
} from '../constants';

const initialState = {
  showPlayerModal: false,
  playingStatus: 'nosound',
  playingTrackInfo: {
    url: null,
    title: null,
    artists: null,
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PLAYER_MODAL: {
      return {
        ...state,
        showPlayerModal: true,
      };
    }
    case SET_PLAYING_STATUS: {
      return {
        ...state,
        playingStatus: action.playingStatus,
      };
    }
    case SET_PLAYING_TRACK_INFO: {
      return {
        ...state,
        playingTrackInfo: action.trackInfo,
      };
    }
    default:
      return state;
  }
};

export default user;
