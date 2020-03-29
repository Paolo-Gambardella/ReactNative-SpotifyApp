import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from '../screens/Search';
import ArtistDetailsScreen from '../screens/ArtistDetails';
import ArtistAlbumDetailsScreen from '../screens/ArtistAlbumDetails';

const SearchNavigatorRouteConfigs = {
  Search: {
    screen: SearchScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ArtistDetails: {
    screen: ArtistDetailsScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  ArtistAlbumDetails: {
    screen: ArtistAlbumDetailsScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
};

const SearchNavigator = createStackNavigator(SearchNavigatorRouteConfigs, {
  navigationOptions: {
    gesturesEnabled: false,
  },
});

export default SearchNavigator;
