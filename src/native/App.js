import React, {Component} from "react";
import {StyleSheet, View, Text, TextInput, Image} from "react-native";
import Forecast from "./Forecast";

const API_KEY = 'bbeb34ebf60ad50f7893e7440a1e2b0b';

export default class App extends Component {
  componentWillMount() {
    this.setState({
      city: '',
      forecast: {
        main: 'Clouds',
        description: 'few clouds',
        temp: 22.7
      }
    });
  }

  handleTextChange(e) {
    const city = e.nativeEvent.text;
    this.setState({
      city: city
    });
    fetch('http://api.openweathermap.org/data/2.5/weather?q='
      + city + '&units=Metric&APPID=' + API_KEY)
      .then(resp => resp.json())
      .then(respJson => {
        this.setState({
          forecast:{
            main: respJson.weather[0].main,
            description: respJson.weather[0].description,
            temp: respJson.main.temp
          }
        });
      })
      .catch(error => console.warn(error))
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../flowers.png')} resizeMode='cover' style={styles.backdrop} >
          <View style={styles.overlay}>
            <Text style={styles.mainText}>
              Current weather for
            </Text>
            <View style={styles.cityContainer}>
            <TextInput style={[styles.city, styles.mainText]}
                       onSubmitEditing={this.handleTextChange.bind(this)}
                       returnKeyType='go' />
            </View>
            <Forecast {...this.state.forecast} />
          </View>
        </Image>
      </View>
    );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  cityContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  city: {
    width: 100,
    height: baseFontSize,
    textAlign: 'center'
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    color: '#FFFFFF'
  }
});