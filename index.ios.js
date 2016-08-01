/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
} from 'react-native';

import WeatherProject from "./src/native/Weather"
import Button from "./src/native/Button"
import PanDemo from "./src/native/PanDemo";
import SimpleList from "./src/native/SimpleList";
import BookList from "./src/native/BookList"
import crossplatform from "./src/native/crossplatform"
import Mondrian from "./src/Mondrian"

AppRegistry.registerComponent('WeatherProject', () => Mondrian);
