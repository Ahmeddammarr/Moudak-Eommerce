import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView,
          AppRegistry, ScrollView   } from 'react-native';
          import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Support extends Component {
    render() {
        return (
          <ScrollView>
            <View style={styles.content}>
              <Text style={styles.heading} >
                Contact Us
              </Text>
               <Text style={styles.prag}>
            Phone Number: +201011359204
              </Text>
              <Text style={styles.prag}>
              E-mail: info@moudak.com
              moudak.app@gmail.com
              </Text>
              </View>
              </ScrollView>
        );
        }
   } 
const styles = StyleSheet.create({
   content: {
    flex:1,
    marginBottom: 20,
    justifyContent: 'center',
    marginTop: hp('35%'),
    alignItems:'center',
   },
   heading: {
    color: '#54469c',
    fontWeight: 'bold',
    marginLeft: 6, 
    paddingTop: 14,
    alignItems: 'center',
    fontSize: 32
   },
     prag: {
    marginLeft: 6,
    fontSize: 22
   } 
  });