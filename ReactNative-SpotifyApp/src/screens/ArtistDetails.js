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
import { PlaylistCard, ArtistCard, BackButton } from '../components';
import { numberFormater } from '../utils/Utils';

const mapStateToProps = ({ artists }) => ({
  artists,
});

export class ArtistDetailsScreen extends Component {
  componentDidMount() {
    const { getArtistAlbums, navigation } = this.props;

    getArtistAlbums(navigation.state.params.id);
  }

  render() {
    const { artists, goBack, navigation } = this.props;

    return (
      <View style={styles.container}>
        {artists.albums ? (
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
                    <View>
                      <Text style={styles.playlistSubTitle}>
                        {`${numberFormater(
                          navigation.state.params.followers.total
                        )} followers`}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </LinearGradient>
            <FlatList
              style={styles.flatList}
              data={artists.albums}
              renderItem={({ item }) => (
                <ArtistCard
                  artistName={item.name}
                  artistImages={item.images}
                  onPress={() =>
                    navigation.navigate('ArtistAlbumDetails', item)
                  }
                />
              )}
              keyExtractor={(item, index) =>
                `Albums-${navigation.state.params.id}-${index}`
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

export default connect(mapStateToProps, actions)(ArtistDetailsScreen);

ArtistDetailsScreen.propTypes = {
  artists: PropTypes.object.isRequired,
  getArtistAlbums: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
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
