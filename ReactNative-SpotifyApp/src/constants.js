export const GET_PLAYLISTS = 'GET PLAYLIST';
export const GET_PLAYLISTS_INFO = 'GET_PLAYLISTS_INFO';
export const GET_ARTISTS = 'GET_ARTISTS';
export const GET_ARTIST_ALBUMS = 'GET_ARTIST_ALBUMS';
export const GET_ARTIST_ALBUM_TRACKS = 'GET_ARTIST_ALBUM_TRACKS';
export const SET_PLAYING_STATUS = 'SET_PLAYING_STATUS';
export const SET_PLAYING_TRACK_INFO = 'SET_PLAYING_TRACK_INFO';
export const SHOW_PLAYER_MODAL = 'SHOW_PLAYER_MODAL';

export const errorOf = (type) => `${type}_ERROR`;
export const resultOf = (result) => `${result}_RESULT`;
