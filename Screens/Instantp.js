import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, View, Platform, PermissionsAndroid } from 'react-native';

import { WebView } from 'react-native-webview';


export default class webviewWithLoading extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    
  }
  hideSpinnerxx=()=> {
      this.setState({ visible: false });
    }
  
  
  showSpinner=()=> {
    this.setState({ visible: true });
    setTimeout(hideSpinner=()=> {
      this.setState({ visible: false });
    }, 3000)
  }
  //spinnertimer=()=> {P
    //(this.showSpinner())
    //setTimeout(this.hideSpinner(), 1000);
  //}


  //permission android
  componentDidMount = () => {
    //Checking for the permission just after component loaded
     
       if (Platform.OS === 'android') {
         //Calling the permission function
         requestREAD_EXTERNAL_STORAGEPermission();
         requestCameraPermission();
     }
    
    
    
    async function requestREAD_EXTERNAL_STORAGEPermission() {
       try {
         const granted = await PermissionsAndroid.request(
           PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,{
             'title': 'Moudak App Permission',
             'message': 'Moudak needs access to your photos, media and files so you can upload them '
           }
         )
         /*if (granted === PermissionsAndroid.RESULTS.GRANTED) {
           //To Check, If Permission is granted
           alert("Thank you for accepting permissions");
         } else {
           alert("Moudak needs access to your photos, media and files so you can upload them");
         }*/
       } catch (err) {
         alert("err",err);
         console.warn(err)
       }
     }
     
     async function requestCameraPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,{
            'title': 'AndoridPermissionExample App Camera Permission',
            'message': 'AndoridPermissionExample App needs access to your camera '
          }
        )
        /*if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          alert("You can use the CAMERA");
        } else {
          alert("CAMERA permission denied");
        }*/
      } catch (err) {
        alert("err",err);
        console.warn(err)
      }
    }}


  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          //onLoadStart={() => (this.showSpinner())}
          //onLoad={() => (this.hideSpinnerxx())}
          //onLoadEnd={() => (this.hideSpinnerxx())}
          style={{ flex: 1 }}
          source={{ uri: 'https://www.moudak.com/printing-paper-app' }}
          injectedJavaScript={`
    (function() {
      function wrap(fn) {
        return function wrapper() {
          var res = fn.apply(this, arguments);
          window.ReactNativeWebView.postMessage('navigationStateChange');
          return res;
        }
      }

      history.pushState = wrap(history.pushState);
      history.replaceState = wrap(history.replaceState);
      window.addEventListener('popstate', function() {
        window.ReactNativeWebView.postMessage('navigationStateChange');
      });
    })();

    true;
  `}
  onMessage={({ nativeEvent: state }) => {
    if (state.data === 'navigationStateChange') {
      // Navigation state updated, can check state.canGoBack, etc.
      (this.showSpinner())

    }
  }}
          onNavigationStateChange={navState => {
            // Keep track of going back navigation within component
            this.canGoBack = navState.canGoBack;
            (this.showSpinner())
            //(this.spinnertimer())
          }}
        />
        {this.state.visible && (
          <ActivityIndicator
            style={{
            flex: 1,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center' }}
            color="#54469d"
            size="large"
          />
        )}
      </View>
    );
  }
}