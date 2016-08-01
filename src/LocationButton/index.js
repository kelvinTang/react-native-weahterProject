import React, {
  Component,
} from 'react';

import Button from './../Button';
import styles from './style';

export default class LocationButton extends Component {
  propsTypes: {
    onGetCoords: React.PropTypes.func.required
  }

  onPress(){
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
        this.props.onGetCoords(initialPosition.coords.latitude,
          initialPosition.coords.longitude);
      },
      (error) => {alert(error.message)},
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  render() {
    return (
      <Button label="定位"
              style={styles.locationButton}
              onPress={this.onPress.bind(this)}
      />
    );
  }

}