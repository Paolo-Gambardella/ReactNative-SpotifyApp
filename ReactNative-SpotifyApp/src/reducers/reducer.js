import {
  GET_PLAYLISTS,
  GET_PLAYLISTS_INFO,
  SET_PLAYING_STATUS,
  SET_PLAYING_TRACK_INFO,
  SHOW_PLAYER_MODAL,
  GET_ARTISTS,
  resultOf,
} from '../constants';

const initialState = {
  playlists: null,
  artists: null,
  playingStatus: 'nosound',
  playingTrackInfo: {
    url: null,
    title: null,
    artists: null,
  },
  showPlayerModal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case resultOf(GET_PLAYLISTS): {
      return {
        ...state,
        playlists: action.data,
      };
    }
    case resultOf(GET_ARTISTS): {
      // console.log(action.data);
      return {
        ...state,
        artists: action.data,
      };
    }
    case GET_PLAYLISTS_INFO: {
      return {
        ...state,
        playlistInfo: null,
      };
    }
    case resultOf(GET_PLAYLISTS_INFO): {
      return {
        ...state,
        playlistInfo: action.data,
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
    case SHOW_PLAYER_MODAL: {
      return {
        ...state,
        showPlayerModal: true,
      };
    }
    default:
      return state;
  }
};

export default reducer;
