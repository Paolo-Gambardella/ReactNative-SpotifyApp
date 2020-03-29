import React from 'react';
import {
  GET_ARTISTS,
  GET_ARTIST_ALBUMS,
  GET_ARTIST_ALBUM_TRACKS,
  GET_PLAYLISTS,
  GET_PLAYLISTS_INFO,
  errorOf,
} from '../constants';
import { Alert } from '../components';

const initialState = {
  alerts: [],
};

let idAlert = -1;

const alerts = (state = initialState, action) => {
  idAlert += 1;
  switch (action.type) {
    case errorOf(GET_ARTISTS): {
      const tmp = { ...state };
      tmp.alerts.push(
        <Alert
          key={idAlert}
          message="Une erreur est survenue lors de la récupération des artistes."
        />
      );

      return {
        ...tmp,
      };
    }
    case errorOf(GET_ARTIST_ALBUMS): {
      const tmp = { ...state };
      tmp.alerts.push(
        <Alert
          key={idAlert}
          message="Une erreur est survenue lors de la récupération des albums."
        />
      );

      return {
        ...tmp,
      };
    }
    case errorOf(GET_ARTIST_ALBUM_TRACKS): {
      const tmp = { ...state };
      tmp.alerts.push(
        <Alert
          key={idAlert}
          message="Une erreur est survenue lors de la récupération des titres de l'album."
        />
      );

      return {
        ...tmp,
      };
    }
    case errorOf(GET_PLAYLISTS): {
      const tmp = { ...state };
      tmp.alerts.push(
        <Alert
          key={idAlert}
          message="Une erreur est survenue lors de la récupération des playlists."
        />
      );

      return {
        ...tmp,
      };
    }
    case errorOf(GET_PLAYLISTS_INFO): {
      const tmp = { ...state };
      tmp.alerts.push(
        <Alert
          key={idAlert}
          message="Une erreur est survenue lors de la récupération des informations de la playlists."
        />
      );

      return {
        ...tmp,
      };
    }
    default:
      return state;
  }
};

export default alerts;
