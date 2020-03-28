import React, { Component } from 'react';
import { TouchableOpacity, Image, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

export class PlaylistCard extends Component {
  constructor() {
    super();

    this.state = {
      imgHeight: (Dimensions.get('window').width / 100) * 45,
      imgWidth: (Dimensions.get('window').width / 100) * 45,
    };
  }

  render() {
    const { uri, onPress, disabled, height, width } = this.props;
    const { imgHeight, imgWidth } = this.state;
    return (
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Image
          style={{ height: height || imgHeight, width: width || imgWidth }}
          resizeMode="contain"
          source={{
            uri,
          }}
        />
      </TouchableOpacity>
    );
  }
}

export default PlaylistCard;

PlaylistCard.defaultProps = {
  disabled: false,
  onPress: null,
  height: 0,
  width: 0,
};

PlaylistCard.propTypes = {
  uri: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
};
