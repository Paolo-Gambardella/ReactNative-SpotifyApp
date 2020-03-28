import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from '../screens/Search';

const SearchNavigatorRouteConfigs = {
  Search: {
    screen: SearchScreen,
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
