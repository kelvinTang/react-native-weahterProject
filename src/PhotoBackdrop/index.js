import React, {
  Component,
} from 'react';

import {
  Image,
  Platform
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import styles from './style.js';
import Button from './../Button';

export default class PhotoBackdrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoSource: require('./../../flowers.png')
    };
  }

  pickImage() {
    var options = {
      title: '选择照片',
      cancelButtonTitle: '取消',
      chooseFromLibraryButtonTitle: '选择一张照片...',
      takePhotoButtonTitle: '拍一张...',
      cameraType: '返回', // 'front' or 'back'
      mediaType: '照片' // 'photo' or 'video'
    };

    ImagePicker.showImagePicker(
      options,
      response => {
        console.log('response = ', response);

        if (response.didCancel) {
          console.log('Canceled ImagePicker');
        }
        else if (response.error) {
          console.log('ImagePicker error: ', response.error);
        }
        else {
          let source;
          if (Platform.OS === 'ios') {
            source = {uri: response.uri.replace('file://', ''), isStatic: true};
          }
          else {
            source = {uri: response.uri, isStatic: true};
          }
          this.setState({ photoSource: source });
        }
      }
    );
  }

  render() {
    return (
      <Image
        style={styles.backdrop}
        source={ this.state.photoSource }
        resizeMode='cover'>
        {this.props.children}
        <Button
          style={styles.button}
          label="Load Image"
          onPress={this.pickImage.bind(this)}/>
      </Image>
    );
  }
}