import React, {Component} from 'react';
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
    let midFlex, horzPad, vertPad = 0
    if (this.state.dimensions.width > this.state.dimensions.height) {
      midFlex = 18
      horzPad = 135
    } else {
      midFlex = 10
      horzPad = 40
      vertPad = 10
    }

    return (
      <View style={styles.container}>
        <View style={styles.status} />
        <View style={styles.title}>
          <Text style={{color: "#eceee0", textShadowColor: "#69d2e7", textShadowOffset: {width: 1.5, height: 1.5}, fontSize: 40, fontWeight: "bold"}}>2SoundE</Text>
        </View>
        <View style={{
            flex: midFlex,
            paddingLeft: horzPad,
            paddingRight: horzPad,
            paddingTop: vertPad,
            paddingBottom: vertPad,
            // borderWidth: 1,
            backgroundColor: "#fa7819",
            justifyContent: "space-around"
          }}>
          <SoundButtonRow names={["2 East strikes again","2 East before blood","Nani?!"]} dimensions={this.state.dimensions}/>
          <SoundButtonRow names={["____ me, Max","Yeahhhh","Boiiii"]} dimensions={this.state.dimensions}/>
          <SoundButtonRow names={["Yikes","Yike","Yeek"]} dimensions={this.state.dimensions}/>
          <SoundButtonRow names={["It's fiiiine","West side ...","... Po-Po"]} dimensions={this.state.dimensions}/>
        </View>
        <View style={styles.bottom} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  status: {
    height: 20,
    backgroundColor: "#fa7819"
  },
  title: {
    flex: 5,
    backgroundColor: "#fa7819",
    justifyContent: "center",
    alignItems: "center"
  },
  bottom: {
    height: 40,
    backgroundColor: "#fa7819"
  }
});
