import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Easing } from 'react-native';
import Modal from 'react-native-modalbox';
import PropTypes from 'prop-types';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import theme from '../theme';

const { width } = Dimensions.get('window');

export class Alert extends Component {
  constructor(props) {
    super(props);

    this.alertModal = React.createRef();
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.alertModal.current.open();
    }, 0);

    setTimeout(() => {
      this.close();
    }, 3000);
  }

  close() {
    this.alertModal.current.close();
  }

  render() {
    const { message } = this.props;

    return (
      <Modal
        style={styles.modal}
        position="top"
        ref={this.alertModal}
        swipeToClose
        backdropPressToClose={false}
        entry="top"
        backdrop={false}
        easing={Easing.elastic(0)}
        keyboardTopOffset={0}
      >
        <View style={[styles.container, { backgroundColor: theme.colors.red }]}>
          <Text style={styles.message}>{message}</Text>
        </View>
        <View style={styles.bottomBarContainer} />
      </Modal>
    );
  }
}

export default Alert;

Alert.propTypes = {
  message: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    position: 'absolute',
    backgroundColor: 'transparent',
    ...ifIphoneX(
      {
        height: 140,
      },
      {
        height: 120,
      }
    ),
  },
  bottomBarContainer: {
    height: 40,
    width,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 10,
  },
  container: {
    width,
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  message: {
    fontSize: 15,
    color: theme.colors.white,
  },
});
