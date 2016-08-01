import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from "react-native";

export default class SimpleList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(['a', 'b', 'c', 'a longer example', 'd', 'e', 'f', 'g', 'h', 'i'])
    };
  }

  renderRow(rowData) {
    return <Text style={styles.row}>{rowData}</Text>;
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD'
  }
});