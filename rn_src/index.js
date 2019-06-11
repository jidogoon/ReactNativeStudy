import React from 'react';
import {
  SafeAreaView, AppRegistry, StyleSheet, Text, FlatList,
} from 'react-native';
import DorunUtils from './dorun-utils';
import ApiRequester from './api_requester';
import DorunButton from './components/dorun_button';
// import HostAppInterface from './hostInterface';
import DorunListItem from './components/dorun_listitem';

export default class DorunDorun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
    };
    this.onPTRRefresh = this.onPTRRefresh.bind(this);
  }

  componentDidMount() {
  }

  onPTRRefresh() {
    // DorunUtils.showToast('onrefresh');
    const testUrl = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50';
    ApiRequester.requestGet(testUrl, (response) => {
      // console.log(JSON.stringify(response));
      // HostAppInterface.logError('RN', JSON.stringify(response));
      this.onApiResponse(response);
    });
  }

  onApiResponse = (response) => {
    this.setState({
      listItems: response.data,
    });
  };

  onKeyListItem = (item, index) => `${item.id}`;

  onRenderListItem = ({ item }) => (
    <DorunListItem
      styles={styles.dorunListItem}
      buttonColor={item.color}
      title={item.title}
      onPress={() => DorunUtils.alert(`${item.title} pressed`)}
      marginVertical={0}
      marginHorizontal={0}
      backgroundUrl={item.url}
      width={DorunUtils.displayWidth()}
    />
  );

  render() {
    const {
      listItems,
    } = this.state;

    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#000' }}>
        <Text
          style={styles.button}
          onPress={() => DorunUtils.alert('title')}
        >
          제모옥
        </Text>
        <DorunButton
          styles={styles.dorunButton}
          buttonColor="#023e71"
          title="load data"
          onPress={() => this.onPTRRefresh()}
          width="100%"
        />
        <FlatList
          contentContainerStyle={styles.flatList}
          data={listItems}
          refreshing={false}
          keyExtractor={this.onKeyListItem}
          renderItem={this.onRenderListItem}
          onRefresh={this.onPTRRefresh}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  flatList: {
    backgroundColor: 'gray',
    flexGrow: 1,
  },
  dorunButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dorunListItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    color: '#ccc',
    fontStyle: 'normal',
    fontSize: 14,
    textAlign: 'center',
    width: '100%',
  },
});


AppRegistry.registerComponent('DorunDorun', () => DorunDorun);
