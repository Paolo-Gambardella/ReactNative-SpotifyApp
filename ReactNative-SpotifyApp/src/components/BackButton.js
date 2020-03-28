import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from 'react-native-vector-icons';
import theme from '../theme';

export const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Ionicons name="ios-arrow-back" size={28} color={theme.colors.green} />
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
