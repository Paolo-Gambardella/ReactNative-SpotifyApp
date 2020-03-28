import { createStackNavigator } from 'react-navigation-stack';
import PlaylistsScreen from '../screens/Playlists';
import PlaylistDetailsScreen from '../screens/PlaylistDetails';

const PlaylistsNavigatorRouteConfigs = {
  Playlists: {
    screen: PlaylistsScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  PlaylistDetail: {
    screen: PlaylistDetailsScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
};

const PlaylistsNavigator = createStackNavigator(
  PlaylistsNavigatorRouteConfigs,
  {
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default PlaylistsNavigator;
