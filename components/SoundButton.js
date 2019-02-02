import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
const Sound = require('react-native-sound');
Sound.setCategory('Playback');

export default class SoundButton extends React.Component {

  constructor(props){
    super(props);
    this.sound = this.createSound();
  }

  createSound = () => {
    var sound = new Sound(this.props.name, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      console.log('success');
    })
    return sound;
  }

  handlePress = () => {
    this.sound.stop(() => {
      this.sound.play();
    });
  }

  render() {
    let width, height;
    if (this.props.dimensions.width > this.props.dimensions.height) {
      height = this.props.dimensions.height / 7;
      width = height * 2;
    } else {
      height = this.props.dimensions.width / 4.6;
      width = height;
    }

    return (
      <TouchableOpacity
        style={[styles.button, {width: width, height: height}]}
        activeOpacity={0.6}
        onPress={this.handlePress}>
        <Text style={styles.buttonText}>
          {this.props.info}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    overflow: "hidden",
    backgroundColor: "#eceee0",
    borderRadius: 8,
    padding: 2,
    justifyContent: "center"
  },
  buttonText: {
    fontFamily: "ComicNeueAngular",
    fontSize: 18,
    textAlign: "center"
  }
});
