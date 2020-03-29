import {
  GET_PLAYLISTS,
  GET_PLAYLISTS_INFO,
  SET_PLAYING_STATUS,
  SET_PLAYING_TRACK_INFO,
  SHOW_PLAYER_MODAL,
  GET_ARTISTS,
  GET_ARTIST_ALBUMS,
  GET_ARTIST_ALBUM_TRACKS,
  resultOf,
} from '../constants';

const initialState = {
  playlists: null,
  playlistInfo: null,
  artists: null,
  albums: null,
  tracks: null,
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
      return {
        ...state,
        artists: action.data,
      };
    }
    case GET_ARTIST_ALBUMS: {
      return {
        ...state,
        albums: null,
      };
    }
    case resultOf(GET_ARTIST_ALBUMS): {
      let tmp = [];
      tmp = action.data.items.filter((elem) => elem.album_group === 'album');
      const cleanTmp = Array.from(new Set(tmp.map((a) => a.name))).map(
        (name) => {
          return tmp.find((a) => a.name === name);
        }
      );
      return {
        ...state,
        albums: cleanTmp,
      };
    }
    case GET_ARTIST_ALBUM_TRACKS: {
      return {
        ...state,
        tracks: null,
      };
    }
    case resultOf(GET_ARTIST_ALBUM_TRACKS): {
      return {
        ...state,
        tracks: action.data,
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
