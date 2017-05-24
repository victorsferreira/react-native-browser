import React, { Component } from 'react';
import { WebView, View } from 'react-native';

export default class Browser extends Component {
    static navigationOptions = {
        // title: 'Welcome',
    };

    constructor(){
        super();
    }

    componentWillMount(){

    }

    render() {
        return (
            <WebView source={{uri: 'http://localhost/webview'}} />
        );
    }
}
