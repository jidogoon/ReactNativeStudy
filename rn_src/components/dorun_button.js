import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

// TODO: state 만들기...? 없으면 pure function
export default class DorunButton extends Component {
  static defaultProps = {
    title: 'untitled',
    buttonColor: '#000',
    titleColor: '#fff',
    flex: undefined,
    width: undefined,
    onPress: () => null,
  };

  render() {
    const {
      title,
      titleColor,
      buttonColor,
      flex,
      width,
      onPress,
    } = this.props;

    return (
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: buttonColor, flex, width },
        ]}
        onPress={onPress}
      >
        <Text style={[
          styles.title,
          { color: titleColor },
        ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
  },
});
