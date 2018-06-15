import React, {Component} from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import SoundButtonRow from "./components/SoundButtonRow.js"

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dimensions: Dimensions.get("window")
    };
    Dimensions.addEventListener("change", this.updateDimensions.bind(this))
  }

  updateDimensions() {
    this.setState({
      dimensions: Dimensions.get("window")
    });
  }

  render() {
    let titleSize, soundFlex, horzPad, vertPad
    if (this.state.dimensions.width > this.state.dimensions.height) {
      titleSize = 60
      soundFlex = 3
      horzPad = 135
      vertPad = 0
    } else {
      titleSize = 80
      soundFlex = 2
      horzPad = 40
      vertPad = 40
    }

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={[styles.titleText, {fontSize: titleSize}]}>
              2SoundE
          </Text>
          <Text style={styles.titleSubtext}>
            Press to play!
          </Text>
        </View>
        <View style={[styles.sounds,
          {flex: soundFlex, paddingHorizontal: horzPad, paddingBottom: vertPad}]}>
          <SoundButtonRow
            names={["2 East strikes again!","2 East before blood!","Nani?!"]}
            soundNames={["a.mp3", "b.mp3", "c.mp3"]}
            dimensions={this.state.dimensions}/>
          <SoundButtonRow
            names={["____ me, Max","Yeahhhh","Boiiii"]}
            soundNames={["a.mp3", "Yeah.m4a", "Boi.m4a"]}
            dimensions={this.state.dimensions}/>
          <SoundButtonRow
            names={["Yikes","Yike","Yeek"]}
            soundNames={["a.mp3", "b.mp3", "c.mp3"]}
            dimensions={this.state.dimensions}/>
          <SoundButtonRow
            names={["It's fiiiine","West side\n...","...\nPo-Po"]}
            soundNames={["a.mp3", "b.mp3", "c.mp3"]}
            dimensions={this.state.dimensions}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fa7819"
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    fontFamily: "ComicNeueAngular-BoldOblique",
  },
  titleSubtext: {
    fontFamily: "ComicNeueAngular",
    fontSize: 20
  },
  sounds: {
    justifyContent: "space-around"
  }
});
