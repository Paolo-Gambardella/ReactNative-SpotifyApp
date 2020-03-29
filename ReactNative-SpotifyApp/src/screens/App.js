import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Root } from '../store/store';
import * as actions from '../actions';
import { PlayerModal } from '../components';
import theme from '../theme';

const mapStateToProps = (state) => ({
  state: state.nav,
  user: state.user,
});

const AppWithNavigationState = connect(mapStateToProps)(Root);

export class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { user } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: theme.colors.black }}>
        <AppWithNavigationState />
        {user.showPlayerModal && (
          <PlayerModal trackInfo={user.playingTrackInfo} />
        )}
      </View>
    );
  }
}

export default connect(mapStateToProps, actions)(AppContainer);

AppContainer.propTypes = {
  user: PropTypes.object.isRequired,
};
