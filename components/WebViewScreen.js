import React from 'react'
import {
    WebView,
    Dimensions,
    View,
    StyleSheet,
    Platform,
    Linking
} from 'react-native';

const {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

//const source = require('./index.html')
const source = (Platform.OS === 'android') ? { uri: 'file:///android_asset/index.html' } : require('../pages/index.html')

export default class WebViewScreen extends React.Component {

    render(){
        return (
            <WebView
                ref={webview => this.webview = webview}
                bounces={true}
                scalesPageToFit={true}
                originWhitelist={['*']}
                source={source}
                style={{width:deviceWidth, height:deviceHeight}}
                domStorageEnabled
                javaScriptEnabled
                onLoad={()=>{
                    //alert('loaded')
                }}
            />
        )
    }
}

