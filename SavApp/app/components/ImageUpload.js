import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import ImageResizer from 'react-native-image-resizer'

export default class PhotoUpload extends React.Component {
  static propTypes = {
  }

  state = {
    height: this.props.height || 300,
    width: this.props.width || 300,
    format: this.props.format || 'JPEG',
    quality: this.props.quality || 80,
    buttonDisabled: false
  }

  selectImage = async() =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1.0,
      base64: true
    });

    console.log(result.uri);
    if(!result.cancelled){
      
      this.setState({userImage: result.uri, imageResult: result, imageSelected: true});
    }
  }

uploadImg = async (user) =>{
  const res = await fetch(this.state.userImage);
      const blob = await res.blob();
        var userID = user;
        const ppRef = fire.storage().ref('ProfilePictures');
        const task = await ppRef.child(userID + '.jpeg').put(blob);
        
        task.ref.getDownloadURL().then((url) => {
          console.log(url);
            this.setState({imageRef: url}, () => this.sendURL2FireBase(this.state.user));
        });

            // console.log("URL: " + url );
            // console.log("Image Uploaded");

    }

  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <TouchableOpacity
          onPress={this.openImagePicker}
          disabled={this.state.buttonDisabled}
        >
          {this.renderChildren(this.props)}
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})