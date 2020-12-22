import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen";
import { AppLoading, SplashScreen} from 'expo';
import { Asset } from 'expo-asset';

export default class HomeScreen extends Component {
  state = {
    isSplashReady: false,
    isAppReady: false,
  };
  render() {


    if (!this.state.isSplashReady) {
      return (
        <AppLoading
          startAsync={this._cacheSplashResourcesAsync}
          onFinish={() => this.setState({ isSplashReady: true })}
          onError={console.warn}
          autoHideSplash={false}
        />
      );
    }

    if (!this.state.isAppReady) {
      return (
        <View style={{ flex: 1 }}>
          <Image
          source={require('../assets/Images/Splash.png')}
          onLoad={this._cacheResourcesAsync}
          />
        </View>
      );
}

    return (
      <View style={styles.container}>
        <View style={styles.logoLcontainer}>
          <View>
            <Image
              style={styles.logo}
              source={require("../assets/Logo-White.png")}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.screensContainer}
              title="Paper Printings"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate("Instantp", {
                  itemId: 86,
                  otherParam: "back"
                });
              }}
            >
              <Image
                style={styles.picons}
                source={require("../assets/Instant-PrintingU.png")}
              />
              <Text style={styles.pText}>Papers Printings</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.screensContainer}
              title="Custom Printings"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate("Merchandise", {
                  itemId: 86,
                  otherParam: "back"
                });
              }}
            >
              <Image
                style={styles.picons}
                source={require("../assets/Special-Printing.png")}
              />
              <Text style={styles.pText}>Custom Printings</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View />
      </View>
    );
  }
  _cacheSplashResourcesAsync = async () => {
    const gif = require('../assets/Images/Splash.png');
    return Asset.fromModule(gif).downloadAsync()
  }

  _cacheResourcesAsync = async () => {
    SplashScreen.hide();
    const images = [
      require('../assets/Special-Printing.png'),
      require('../assets/Instant-PrintingU.png'),
      require('../assets/Logo-White.png'),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
    this.setState({ isAppReady: true });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#54469c"
  },
  logoLcontainer: {
    alignItems: "center"
  },
  screensContainer: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("2%"),
    padding: hp("0.5%"),
    paddingHorizontal: hp("15%"),
    borderRadius: hp("3%")
  },
  logo: {
    height: hp("30%"),
    width: wp("44%"),
    alignItems: "center"
  },
  picons: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8
  },
  pText: {
    fontSize: wp("5%"),
    fontWeight: "bold",
    marginBottom: 5
  },
  policy: {
    marginTop: 28,
    paddingHorizontal: hp("1.5%"),
    fontWeight: "600",
    fontSize: wp("4%"),
    color: "white",
    flexDirection: "row"
  }
});
