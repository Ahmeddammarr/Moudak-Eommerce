import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

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
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          //onLoadStart={() => (this.showSpinner())}
          //onLoad={() => (this.hideSpinnerxx())}
          //onLoadEnd={() => (this.hideSpinnerxx())}
          style={{ flex: 1 }}
          source={{ uri: 'https://www.moudak.com/designer' }}
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