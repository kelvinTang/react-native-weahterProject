import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import Switch from "./switch";

export default class CrossPlatform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: false
    };
  }

  onValueChange(val) {
    this.setState({val: val});
  }

  render() {
    const colorClass = this.state.val ? styles.blueContainer : styles.redContainer;
    return (
      <View style={[styles.container, colorClass]}>
        <Text style={styles.welcome}>
          Make me blue!
        </Text>
        <Switch onValueChange={this.onValueChange.bind(this)}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueContainer: {
    backgroundColor: '#5555FF'
  },
  redContainer: {
    backgroundColor: '#FF5555'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});