import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from "react-native-button";

class SoundButton extends React.Component {

  handlePress() {
    
  }

  render() {
    let width, height = 0

    if (this.props.dimensions.width > this.props.dimensions.height) {
      height = this.props.dimensions.height / 7
      width = height * 2
    } else {
      height = this.props.dimensions.width / 4.6
      width = height
    }


    return (
      <Button
        containerStyle={{
          width: width,
          height: height,
          overflow: "hidden",
          borderRadius: 5,
          backgroundColor: "#eceee0",
          justifyContent: "center"}}
        style={{
          fontSize: 18,
          color: 'black'}}
        activeOpacity={.7}>
        {this.props.info}
      </Button>
    );
  }
}

export default class SoundButtonRow extends React.Component {

  render() {
    return (
      <View style={styles.row}>
        <SoundButton info={this.props.names[0]} dimensions={this.props.dimensions}/>
        <SoundButton info={this.props.names[1]} dimensions={this.props.dimensions}/>
        <SoundButton info={this.props.names[2]} dimensions={this.props.dimensions}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
