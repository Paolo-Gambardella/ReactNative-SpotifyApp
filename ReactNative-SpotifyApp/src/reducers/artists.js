import {
  GET_ARTISTS,
  GET_ARTIST_ALBUMS,
  GET_ARTIST_ALBUM_TRACKS,
  resultOf,
} from '../constants';

const initialState = {
  artists: null,
  albums: null,
  tracks: null,
};

const artists = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default artists;
