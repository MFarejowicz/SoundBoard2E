import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import SoundButtonRow from "./components/SoundButtonRow.js"

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dimensions: Dimensions.get("window")
    };
    Dimensions.addEventListener("change", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    this.setState({
      dimensions: Dimensions.get("window")
    });
  }

  render() {
    let titleSize, soundFlex, horzPad, vertPad;
    if (this.state.dimensions.width > this.state.dimensions.height) {
      titleSize = 60;
      soundFlex = 3;
      horzPad = 135;
      vertPad = 0;
    } else {
      titleSize = 80;
      soundFlex = 2;
      horzPad = 40;
      vertPad = 40;
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
            names={["West side\n...", "...\nPo-Po", "Nani?!"]}
            soundNames={["ws.m4a", "pp.m4a", "nani.m4a"]}
            dimensions={this.state.dimensions}/>
          <SoundButtonRow
            names={["FORWARD Aerial", "Yeahhhh","Boiiii"]}
            soundNames={["fa.mp3", "yeah.m4a", "boi.m4a"]}
            dimensions={this.state.dimensions}/>
          <SoundButtonRow
            names={["STERN JUSTICE!", "Sou Desuka", "Wewwww"]}
            soundNames={["sj.mp3", "sou.m4a", "wew.mp3"]}
            dimensions={this.state.dimensions}/>
          <SoundButtonRow
            names={["Let's Goooo", "REEE!", "Kuber-netes"]}
            soundNames={["lg.mp3", "ree.mp3", "kub.mp3"]}
            dimensions={this.state.dimensions}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fa7819",
    color: 'black'
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
