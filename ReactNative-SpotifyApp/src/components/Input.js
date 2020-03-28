import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import theme from '../theme';

export class Input extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  focus() {
    this.inputRef.current.focus();
  }

  render() {
    const {
      onChange,
      value,
      placeholder,
      style,
      multiline,
      numberOfLines,
      autoCorrect,
      autoFocus,
      leftLogo,
      rightLogo,
      keyboardType,
      editable,
      secureTextEntry,
      returnKeyType,
      onSubmitEditing,
    } = this.props;

    return (
      <View style={[styles.container, { ...style }]}>
        {leftLogo}
        <TextInput
          ref={this.inputRef}
          multiline={multiline}
          editable={editable}
          style={styles.text}
          value={value}
          placeholder={placeholder}
          onChangeText={(text) => onChange(text)}
          placeholderTextColor={theme.colors.lightGrey}
          scrollEnabled={false}
          numberOfLines={numberOfLines}
          autoCorrect={autoCorrect}
          autoFocus={autoFocus}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
        />
        {rightLogo}
      </View>
    );
  }
}

export default Input;

Input.defaultProps = {
  style: {},
  multiline: false,
  numberOfLines: 1,
  autoCorrect: true,
  autoFocus: false,
  leftLogo: null,
  rightLogo: null,
  keyboardType: 'default',
  editable: true,
  secureTextEntry: false,
  returnKeyType: 'next',
  onSubmitEditing: null,
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.object,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  autoCorrect: PropTypes.bool,
  autoFocus: PropTypes.bool,
  leftLogo: PropTypes.any,
  rightLogo: PropTypes.any,
  keyboardType: PropTypes.string,
  editable: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  returnKeyType: PropTypes.string,
  onSubmitEditing: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.white,
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    paddingTop: 0,
    flex: 1,
  },
});
