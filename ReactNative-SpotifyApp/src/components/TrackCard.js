/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import theme from '../theme';
import { formatArtists } from '../utils/Utils';

export class TrackCard extends Component {
  render() {
    const { trackTitle, trackArtists, onPress, disabled } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={{ flex: 1, padding: 12.5 }}
      >
        <Text
          style={[
            styles.trackText,
            { color: disabled ? theme.colors.darkGrey : theme.colors.white },
          ]}
        >
          {trackTitle}
        </Text>
        <Text
          style={[
            styles.trackText,
            { color: disabled ? theme.colors.darkGrey : theme.colors.grey },
          ]}
        >
          {formatArtists(trackArtists)}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default TrackCard;

TrackCard.defaultProps = {
  trackTitle: null,
  trackArtists: null,
};

TrackCard.propTypes = {
  trackTitle: PropTypes.string,
  trackArtists: PropTypes.array,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  trackText: {
    fontSize: 12,
  },
});
