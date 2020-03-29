import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PlaylistCard } from '../components';
import * as actions from '../actions';
import theme from '../theme';

const mapStateToProps = ({ playlists, loading }) => ({
  playlists,
  loading,
});

export class PlaylistsScreen extends Component {
  componentDidMount() {
    const { getPlaylists, getToken } = this.props;

    getToken();
    getPlaylists();
  }

  goToDetailsScreen(playlistId) {
    const { navigation } = this.props;

    navigation.navigate('PlaylistDetail', playlistId);
  }

  render() {
    const { playlists, loading, getPlaylists } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Playlists</Text>
        </View>
        {playlists.playlists ? (
          <FlatList
            style={styles.flatList}
            data={playlists.playlists.items}
            renderItem={({ item }) => (
              <View style={{ margin: 5 }}>
                <PlaylistCard
                  uri={item.images[0].url}
                  onPress={() => this.goToDetailsScreen(item.id)}
                />
              </View>
            )}
            numColumns={2}
            keyExtractor={(item, index) => `Playlist-${index}`}
            refreshControl={
              <RefreshControl
                refreshing={loading.getPlaylists}
                onRefresh={() => getPlaylists()}
                tintColor={theme.colors.green}
              />
            }
          />
        ) : (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator color={theme.colors.green} />
          </View>
        )}
      </View>
    );
  }
}

export default connect(mapStateToProps, actions)(PlaylistsScreen);

PlaylistsScreen.propTypes = {
  loading: PropTypes.object.isRequired,
  playlists: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  getPlaylists: PropTypes.func.isRequired,
  getToken: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    paddingHorizontal: 10,
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  flatList: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  headerContainer: {
    marginTop: 40,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
});
