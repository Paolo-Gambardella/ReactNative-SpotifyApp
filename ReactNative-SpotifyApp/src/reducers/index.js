import { combineReducers } from 'redux';
import navigation from './navigation';
import loading from './loading';
import artists from './artists';
import playlists from './playlists';
import user from './user';

const appReducer = combineReducers({
  nav: navigation,
  loading,
  artists,
  playlists,
  user,
});

export default appReducer;
