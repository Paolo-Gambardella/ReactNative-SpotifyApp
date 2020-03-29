import client from '../utils/Axios';
import {
  GET_ARTISTS,
  GET_ARTIST_ALBUMS,
  GET_ARTIST_ALBUM_TRACKS,
  resultOf,
  errorOf,
} from '../constants';

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

export const getArtistAlbums = (artistId) => (dispatch) => {
  dispatch({ type: GET_ARTIST_ALBUMS });

  client
    .get(`/artists/${artistId}/albums`)
    .then((response) => {
      dispatch({
        type: resultOf(GET_ARTIST_ALBUMS),
        data: response.data,
      });
    })
    .catch((error) => {
      dispatch({ type: errorOf(GET_ARTIST_ALBUMS), error });
    });
};

export const getAlbumTracks = (albumId) => (dispatch) => {
  dispatch({ type: GET_ARTIST_ALBUM_TRACKS });
  client
    .get(`/albums/${albumId}/tracks`)
    .then((response) => {
      dispatch({
        type: resultOf(GET_ARTIST_ALBUM_TRACKS),
        data: response.data,
      });
    })
    .catch((error) => {
      dispatch({ type: errorOf(GET_ARTIST_ALBUM_TRACKS), error });
    });
};
