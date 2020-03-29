import { GET_PLAYLISTS, GET_PLAYLISTS_INFO, resultOf } from '../constants';

const initialState = {
  playlists: null,
  playlistInfo: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case resultOf(GET_PLAYLISTS): {
      return {
        ...state,
        playlists: action.data,
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
    default:
      return state;
  }
};

export default reducer;
