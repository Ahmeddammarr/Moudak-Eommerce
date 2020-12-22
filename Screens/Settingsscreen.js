import React, { Component } from "react";
import { Image, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen";


export default class Settingsscreen extends Component {
  render() {
    return (
  <View style={styles.container}>
  <View>
            <TouchableOpacity
              style={styles.screensContainer}
              title="Our Policy"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate("Policy", {
                  itemId: 86,
                  otherParam: "back"
                });
              }}
            >
              <Image
                style={styles.picons}
                source={require("../assets/policyicon.png")}
              />
              <Text style={styles.pText}>Moudak Policy</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.screensContainer}
              title="Support"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate("Support", {
                  itemId: 86,
                  otherParam: "back"
                });
              }}
            >
              <Image
                style={styles.picons}
                source={require("../assets/supporticon.png")}
              />
              <Text style={styles.pText}>Support Center</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.screensContainerxx}
              title="Become a Moudak Designer"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate("moudakdesigner", {
                  itemId: 86,
                  otherParam: "back"
                });
              }}
            >
              <Image
                style={styles.picons}
                source={require("../assets/designicon.png")}
              />
              <Text style={styles.pText}>Become a Designer</Text>
            </TouchableOpacity>
          </View>
  </View>
);
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  },
  logoLcontainer: {
    alignItems: "center"
  },
  screensContainer: {
    backgroundColor: "#54469c",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("3%"),
    padding: hp("0.5%"),
    paddingHorizontal: hp("20%"),
    marginBottom: hp("2%"),
    borderRadius: hp("3%")
  },
  screensContainerxx: {
    backgroundColor: "#54469c",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("3%"),
    padding: hp("0.5%"),
    paddingHorizontal: hp("19%"),
    marginBottom: hp("2%"),
    borderRadius: hp("3%")
  },
  logo: {
    height: hp("20%"),
    width: wp("30%"),
    alignItems: "center"
  },
  picons: {
    height: hp("10%"),
    width: wp("18%"),
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8
  },
  pText: {
    fontSize: 12 ,
    //fontSize: hp("3%"),
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
    color: "#FFFFFF",
    alignItems: "center"
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

