import {
  Platform, ToastAndroid, Alert, Dimensions
} from 'react-native';

const IS_ANDROID = Platform.OS === 'android';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class DorunUtils {
  static showToast(message) {
    console.log(`toast: ${message}`);
    if (IS_ANDROID) {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  }

  static alert(message) {
    Alert.alert(null, message);
  }

  static displayWidth = () => viewportWidth;

  static displayHeight = () => viewportHeight;

  static isAndroid = () => IS_ANDROID;
}
