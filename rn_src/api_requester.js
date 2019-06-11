import axios from 'axios';

export default class ApiRequester {
  static requestGet = (url, callback) => {
    axios.get(url).then(callback);
  };

  static requestPost = (url, callback) => {
    axios.post(url).then(callback);
  };
}

