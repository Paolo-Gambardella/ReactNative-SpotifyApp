import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import * as actions from '../actions';
import theme from '../theme';
import { PlaylistCard, TrackCard, BackButton } from '../components';
import { numberFormater } from '../utils/Utils';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});

export class PlaylistDetailsScreen extends Component {
  componentDidMount() {
    const { getPlaylistInfo, navigation } = this.props;

    getPlaylistInfo(navigation.state.params);
  }

  render() {
    const { reducer, play, goBack, navigation } = this.props;

    return (
      <View style={styles.container}>
        {reducer.playlistInfo ? (
          <View style={styles.container}>
            <View style={styles.backButtonContainer}>
              <BackButton onPress={() => goBack()} />
            </View>
            <LinearGradient
              colors={['transparent', theme.colors.gradientGreen]}
            >
              <View style={styles.headerContainer}>
                <View style={styles.headerInfoContainer}>
                  <PlaylistCard
                    uri={reducer.playlistInfo.images[0].url}
                    height={125}
                    width={125}
                    disabled
                  />
                  <View style={styles.playlistInfoContainer}>
                    <View>
                      <Text style={styles.playlistTitle}>
                        {reducer.playlistInfo.name}
                      </Text>
                      <Text style={styles.playlistSubTitle}>
                        {`Playlist by ${reducer.playlistInfo.owner.display_name}`}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.playlistDescription}>
                        {reducer.playlistInfo.description}
                      </Text>
                      <Text style={styles.playlistSubTitle}>
                        {`${numberFormater(
                          reducer.playlistInfo.followers.total
                        )} followers`}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </LinearGradient>
            <FlatList
              style={styles.flatList}
              data={reducer.playlistInfo.tracks.items}
              renderItem={({ item }) => (
                <TrackCard
                  trackTitle={item.track?.name}
                  trackArtists={item.track?.artists}
                  onPress={() => {
                    play({
                      url: item.track?.preview_url,
                      title: item.track?.name,
                      artists: item.track?.artists,
                    });
                  }}
                  disabled={!item.track?.preview_url}
                />
              )}
              keyExtractor={(item, index) =>
                `Playlist-${navigation.state.params}-${index}`
              }
            />
          </View>
        ) : (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator color={theme.colors.green} />
          </View>
        )}
      </View>
    );
  }
}

export default connect(mapStateToProps, actions)(PlaylistDetailsScreen);

PlaylistDetailsScreen.propTypes = {
  reducer: PropTypes.object.isRequired,
  getPlaylistInfo: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  play: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  backButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 35,
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  headerContainer: {
    height: 150,
    justifyContent: 'center',
    padding: 12.5,
    borderBottomColor: theme.colors.darkGreen,
    borderBottomWidth: 2,
  },
  headerInfoContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start',
  },
  playlistInfoContainer: {
    flex: 1,
    height: 125,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  playlistTitle: {
    fontSize: 24,
    color: theme.colors.white,
  },
  playlistSubTitle: {
    fontSize: 10,
    color: theme.colors.grey,
  },
  playlistDescription: {
    fontSize: 12,
    color: theme.colors.white,
  },
});
