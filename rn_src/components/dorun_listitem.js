import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableNativeFeedback,
} from 'react-native';
import DorunUtils from '../dorun-utils';

export default class DorunListItem extends Component {
  static defaultProps = {
    title: 'untitled',
    buttonColor: '#000',
    titleColor: '#fff',
    flex: undefined,
    width: undefined,
    marginVertical: 5,
    marginHorizontal: 0,
    backgroundUrl: undefined,
    onPress: () => null,
  };

  render() {
    const {
      title,
      titleColor,
      buttonColor,
      flex,
      width,
      marginVertical,
      marginHorizontal,
      backgroundUrl,
      onPress,
    } = this.props;

    const childItem = (
      <ImageBackground
        source={{ uri: backgroundUrl }}
        style={{
          resizeMode: 'center', width: '100%', height: 'auto', minHeight: 100,
        }}
      >
        <Text style={[
          styles.title,
          { color: titleColor },
        ]}
        >
          {title}
        </Text>
      </ImageBackground>
    );

    if (DorunUtils.isAndroid()) {
      return (
        <TouchableNativeFeedback
          style={[
            styles.button,
            {
              backgroundColor: buttonColor, flex, width, marginVertical, marginHorizontal,
            },
          ]}
          onPress={onPress}
          useForeground
          background={TouchableNativeFeedback.Ripple('#000000', true)}
        >
          {childItem}
        </TouchableNativeFeedback>
      );
    }
    return (
      <TouchableHighlight
        style={[
          styles.button,
          {
            backgroundColor: buttonColor, flex, width, marginVertical, marginHorizontal,
          },
        ]}
        onPress={onPress}
      >
        {childItem}
      </TouchableHighlight>
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
