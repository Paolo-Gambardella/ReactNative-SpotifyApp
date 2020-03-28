import { GET_PLAYLISTS, resultOf, errorOf } from '../constants';

const initialState = {
  getPlaylists: false,
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYLISTS: {
      return {
        ...state,
        getPlaylists: true,
      };
    }
    case errorOf(GET_PLAYLISTS):
    case resultOf(GET_PLAYLISTS): {
      return {
        ...state,
        getPlaylists: false,
      };
    }
    default:
      return state;
  }
};

export default loading;
