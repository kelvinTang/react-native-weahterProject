import React, { Component } from 'react';
import {
  StyleSheet,
  PanResponder,
  View,
  Text
} from 'react-native';

const CIRCLE_SIZE = 40;
const CIRCLE_COLOR = 'blue';
const CIRCLE_HIGHLIGHT_COLOR = 'green';

export default class PanResponderExample extends Component {
  // Set some initial values.
  panResponder = {}
  previousLeft = 0
  previousTop = 0
  circleStyles = {}
  circle = null

  constructor(props){
    super(props);
    this.state = {
      numberActiveTouches: 0,
      moveX: 0,
      moveY: 0,
      x0: 0,
      y0: 0,
      dx: 0,
      dy: 0,
      vx: 0,
      vy: 0
    };
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd,
    });
    this.previousLeft = 20;
    this.previousTop = 84;
    this.circleStyles = {
      style: {
        left: this.previousLeft,
        top: this.previousTop,
      }
    };
  }

  componentDidMount() {
    this.updatePosition();
  }

  render() {
    return (
      <View style={styles.container}>
        <View ref={(circle) => {
          this.circle = circle;
        }}
              style={styles.circle}
          {...this.panResponder.panHandlers}
        />

        <Text>
          {this.state.numberActiveTouches} touches,
          dx: {this.state.dx},
          dy: {this.state.dy},
          vx: {this.state.vx},
          vy: {this.state.vy}
        </Text>
      </View>
    );
  }

  highlight = () => {
    this.circle && this.circle.setNativeProps({
      style: {
        background: CIRCLE_HIGHLIGHT_COLOR
      }
    });
  };

  unhighlight = () => {
    this.circle && this.circle.setNativeProps({
      style: {
        background: CIRCLE_COLOR
      }
    });
  };

  updatePosition = () => {
    this.circle && this.circle.setNativeProps(this.circleStyles);
  };

  handleStartShouldSetPanResponder = (e: Object, gestureState: Object) => {
    return true;
  };

  handleMoveShouldSetPanResponder = (e: Object, gestureState: Object) => {
    return true;
  };

  handlePanResponderGrant = (e: Object, gestureState: Object) => {
    this.highlight();
  };

  handlePanResponderMove = (e: Object, gestureState: Object) => {
    this.setState({
      stateID: gestureState.stateID,
      moveX: gestureState.moveX,
      moveY: gestureState.moveY,
      x0: gestureState.x0,
      y0: gestureState.y0,
      dx: gestureState.dx,
      dy: gestureState.dy,
      vx: gestureState.vx,
      vy: gestureState.vy,
      numberActiveTouches: gestureState.numberActiveTouches
    });

    this.circleStyles.style.left = this.previousLeft + gestureState.dx;
    this.circleStyles.style.top = this.previousTop + gestureState.dy;
    this.updatePosition();
  };

  handlePanResponderEnd = (e: Object, gestureState: Object) => {
    this.unhighlight();
    this.previousLeft += gestureState.dx;
    this.previousTop += gestureState.dy;
  }

}

const styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: CIRCLE_COLOR,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  container: {
    flex: 1,
    paddingTop: 64,
  },
});