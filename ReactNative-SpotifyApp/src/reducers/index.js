import { combineReducers } from 'redux';
import navigation from './navigation';
import loading from './loading';
import artists from './artists';
import playlists from './playlists';
import user from './user';
import alerts from './alerts';

const appReducer = combineReducers({
  nav: navigation,
  loading,
  artists,
  playlists,
  user,
  alerts,
});

export default appReducer;
