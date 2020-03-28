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
  reducer: state.reducer,
});

const AppWithNavigationState = connect(mapStateToProps)(Root);

export class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { reducer } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: theme.colors.black }}>
        <AppWithNavigationState />
        {reducer.showPlayerModal && (
          <PlayerModal trackInfo={reducer.playingTrackInfo} />
        )}
      </View>
    );
  }
}

export default connect(mapStateToProps, actions)(AppContainer);

AppContainer.propTypes = {
  reducer: PropTypes.object.isRequired,
};
