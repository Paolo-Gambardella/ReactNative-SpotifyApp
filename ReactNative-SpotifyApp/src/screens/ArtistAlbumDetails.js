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

const mapStateToProps = ({ artists }) => ({
  artists,
});

export class ArtistAlbumDetailsScreen extends Component {
  componentDidMount() {
    const { getAlbumTracks, navigation } = this.props;

    getAlbumTracks(navigation.state.params.id);
  }

  render() {
    const { artists, play, goBack, navigation } = this.props;

    return (
      <View style={styles.container}>
        {artists.tracks ? (
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
                    uri={navigation.state.params.images[0].url}
                    height={125}
                    width={125}
                    disabled
                  />
                  <View style={styles.playlistInfoContainer}>
                    <View>
                      <Text style={styles.playlistTitle}>
                        {navigation.state.params.name}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </LinearGradient>
            <FlatList
              style={styles.flatList}
              data={artists.tracks.items}
              renderItem={({ item }) => (
                <TrackCard
                  trackTitle={item.name}
                  trackArtists={item.artists}
                  onPress={() => {
                    play({
                      url: item.preview_url,
                      title: item.name,
                      artists: item.artists,
                    });
                  }}
                  disabled={!item.preview_url}
                />
              )}
              keyExtractor={(item, index) =>
                `Album-${navigation.state.params.id}-Track-${index}`
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

export default connect(mapStateToProps, actions)(ArtistAlbumDetailsScreen);

ArtistAlbumDetailsScreen.propTypes = {
  artists: PropTypes.object.isRequired,
  getAlbumTracks: PropTypes.func.isRequired,
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
    justifyContent: 'center',
    marginLeft: 10,
  },
  playlistTitle: {
    fontSize: 24,
    color: theme.colors.white,
  },
  playlistSubTitle: {
    fontSize: 14,
    color: theme.colors.grey,
  },
  playlistDescription: {
    fontSize: 12,
    color: theme.colors.white,
  },
});
