/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from 'react-native-vector-icons';
import theme from '../theme';

const { width } = Dimensions.get('window');

export class ArtistCard extends Component {
  render() {
    const { artistName, artistImages, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.infoContainer}>
            {artistImages.length > 0 ? (
              <Image
                style={{ height: 50, width: 50, borderRadius: 25 }}
                resizeMode="contain"
                source={{
                  uri: artistImages[0].url,
                }}
              />
            ) : (
              <View style={styles.noImageContainer}>
                <Text style={styles.noImageText}>?</Text>
              </View>
            )}
            <View style={styles.artistNameContainer}>
              <Text style={styles.artistNameText} numberOfLines={1}>
                {artistName}
              </Text>
            </View>
          </View>
          <Ionicons
            name="ios-arrow-forward"
            size={21}
            color={theme.colors.white}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default ArtistCard;

ArtistCard.defaultProps = {
  artistName: null,
  artistImages: [],
};

ArtistCard.propTypes = {
  artistName: PropTypes.string,
  artistImages: PropTypes.array,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12.5,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  noImageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noImageText: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
  artistNameContainer: {
    marginLeft: 10,
  },
  artistNameText: {
    color: 'white',
    fontSize: 18,
    width: width / 2,
  },
});
