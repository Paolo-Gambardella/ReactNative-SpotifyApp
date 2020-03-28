import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import theme from '../theme';
import { formatArtists } from '../utils/Utils';
import * as actions from '../actions';

const { width, height } = Dimensions.get('window');

const mapStateToProps = ({ reducer }) => ({
  reducer,
});

export class PlayerModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { trackInfo, pauseAndPlayRecording, reducer } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.trackContainer}>
          <View>
            <Text style={styles.trackTitleText}>{trackInfo.title}</Text>
            <Text style={styles.trackArtistsText}>
              {formatArtists(trackInfo.artists)}
            </Text>
          </View>
          <TouchableOpacity onPress={() => pauseAndPlayRecording()}>
            <MaterialCommunityIcons
              name={
                reducer.playingStatus === 0
                  ? 'pause-circle-outline'
                  : 'play-circle-outline'
              }
              size={50}
              color={theme.colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, actions)(PlayerModal);

PlayerModal.propTypes = {
  trackInfo: PropTypes.object.isRequired,
  pauseAndPlayRecording: PropTypes.func.isRequired,
  reducer: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: height - 155,
    left: 0,
    right: 0,
    bottom: 0,
    width,
    height: 75,
    ...ifIphoneX(
      {
        marginBottom: 12.5,
      },
      {
        marginBottom: 0,
      }
    ),
    backgroundColor: theme.colors.black,
    justifyContent: 'center',
    padding: 12.5,
    borderTopColor: theme.colors.green,
    borderTopWidth: 2,
  },
  trackContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trackTitleText: {
    fontSize: 12,
    color: theme.colors.white,
  },
  trackArtistsText: {
    fontSize: 12,
    color: theme.colors.grey,
  },
});
