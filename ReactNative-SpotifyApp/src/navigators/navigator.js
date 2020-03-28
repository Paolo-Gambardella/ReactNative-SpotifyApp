import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import PlaylistsNavigator from './playlists';
import SearchNavigator from './search';
import theme from '../theme';

const LoggedRouteConfigs = {
  Playlists: {
    screen: PlaylistsNavigator,
    navigationOptions: () => ({
      header: null,
      tabBarLabel: 'Playlists',
      tabBarIcon: ({ focused }) => (
        <MaterialCommunityIcons
          name="playlist-music-outline"
          size={30}
          color={focused ? theme.colors.green : theme.colors.white}
        />
      ),
    }),
  },
  Search: {
    screen: SearchNavigator,
    navigationOptions: () => ({
      header: null,
      tabBarLabel: 'Recherche',
      tabBarIcon: ({ focused }) => (
        <MaterialCommunityIcons
          name="magnify"
          size={30}
          color={focused ? theme.colors.green : theme.colors.white}
        />
      ),
    }),
  },
};

const LoggedNavigator = createBottomTabNavigator(LoggedRouteConfigs, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  header: true,
  tabBarOptions: {
    style: {
      backgroundColor: theme.colors.black,
      borderTopWidth: 1,
      borderTopColor: theme.colors.veryLightGrey,
      ...ifIphoneX(
        {
          paddingBottom: 15,
        },
        {
          paddingBottom: 0,
        }
      ),
    },
    allowFontScaling: true,
    indicatorStyle: {
      backgroundColor: 'transparent',
    },
    activeTintColor: theme.colors.green,
    inactiveTintColor: theme.colors.grey,
    labelStyle: {
      fontSize: 12,
      marginTop: 4,
    },
    upperCaseLabel: false,
    showIcon: true,
  },
});

export default LoggedNavigator;
