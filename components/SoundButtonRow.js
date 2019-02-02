import React from 'react';
import { StyleSheet, View } from 'react-native';
import SoundButton from "./SoundButton.js";

export default class SoundButtonRow extends React.Component {

  render() {
    return (
      <View style={styles.row}>
        <SoundButton
          info={this.props.names[0]}
          name={this.props.soundNames[0]}
          dimensions={this.props.dimensions}
        />
        <SoundButton
          info={this.props.names[1]}
          name={this.props.soundNames[1]}
          dimensions={this.props.dimensions}
        />
        <SoundButton
          info={this.props.names[2]}
          name={this.props.soundNames[2]}
          dimensions={this.props.dimensions}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
