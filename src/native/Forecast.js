import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

export default class Forecast extends Component {
  render(){
    return (
      <View>
        <Text style={styles.bigText}>
          {this.props.main}
        </Text>
        <Text style={styles.mainText}>
          当前天气: {this.props.description}
        </Text>
        <Text style={styles.bigText}>
          {this.props.temp}°C
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigText: {
    flex:2 ,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  mainText: {
    flex: 1,
    fontSize: 12,
    textAlign: 'center',
    color: '#FFFFFF'
  }
});