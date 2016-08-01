import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  Image
} from 'react-native';

// import PhotoBackdrop from "./../PhotoBackdrop/local_image";
// import PhotoBackdrop from "./../PhotoBackdrop/camera_roll_example";
import PhotoBackdrop from "./../PhotoBackdrop";
import Forecast from './Forecast';
import LocationButton from './../LocationButton';

const STORAGE_KEY = '@SmarterWeather:city';
const WEATHER_API_KEY = 'bbeb34ebf60ad50f7893e7440a1e2b0b';
const API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';

export default class SmarterWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {forecast: null};
  }

  componentDidMount() {
    AsyncStorage.getItem(STORAGE_KEY)
      .then(value => {
        if (value !== null) {
          this.getForecastForCity(value);
        }
      })
      .catch(error => console.log('AsyncStorage error: ' + error.message))
      .done();
  }

  getForecastForCity(city) {
    // Store city name
    AsyncStorage.setItem(STORAGE_KEY, city)
      .then(() => console.log('Saved selection to disk: ' + city))
      .catch((error) => console.log('AsyncStorage error: ' + error.message))
      .done();

    this.getForecast(
      `${API_STEM}q=${city}&units=Metric&APPID=${WEATHER_API_KEY}`);
  }

  getForecast(url, cb) {
    fetch(url)
      .then(resp => resp.json())
      .then(respJson => {
        this.setState({
          forecast: {
            main: respJson.weather[0].main,
            description: respJson.weather[0].description,
            temp: respJson.main.temp
          }
        });
      })
      .catch(error => console.warn(error));
  }

  getForecastForCoords(lat, lon) {
    this.getForecast(
      `${API_STEM}lat=${lat}&lon=${lon}&units=Metric&APPID=${WEATHER_API_KEY}`);
  }

  handleTextChange(event) {
    const city = event.nativeEvent.text;
    this.getForecastForCity(city);
  }

  render() {
    let content = null;
    if (this.state.forecast !== null) {
      content = (
        <View style={styles.row}>
          <Forecast
            main={this.state.forecast.main}
            description={this.state.forecast.description}
            temp={this.state.forecast.temp}/>
        </View>);
    }
    return (
      <PhotoBackdrop>
        <View style={styles.overlay}>
          <View style={styles.row}>
            <Text style={textStyles.mainText}>
              城市
            </Text>
            <View style={styles.cityContainer}>
              <TextInput
                style={[textStyles.mainText, styles.cityName]}
                returnKeyType='go'
                onSubmitEditing={this.handleTextChange.bind(this)}/>
            </View>
          </View>
          <View style={styles.row}>
            <LocationButton onGetCoords={this.getForecastForCoords.bind(this)}/>
          </View>
          {content}
        </View>
      </PhotoBackdrop>
    );

  }
}

import textStyles from './../styles/typography.js';
const styles = StyleSheet.create({
  overlay: {
    flexDirection: 'column',
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
  },
  row: {
    width: 400,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  cityContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 30,
    width: 100
  },
  cityName: {
    width: 100,
    height: textStyles.baseFontSize,
    textAlign: 'center'
  }
});