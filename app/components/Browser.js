import React, { Component } from 'react';
import { WebView, View, NetInfo } from 'react-native';

export default class Browser extends Component {
    static navigationOptions = {
        // title: 'Welcome',
    };

    constructor(){
        super();

        this.state = {
            is_connected: false
        }

        NetInfo.isConnected.fetch().then(is_connected => {
            this.setState({is_connected: is_connected});
        });

        function handleFirstConnectivityChange(is_connected) {
            this.setState({is_connected: is_connected});
        }

        NetInfo.isConnected.addEventListener( 'change', handleFirstConnectivityChange );
    }

    componentWillMount(){

    }

    render() {
        return (
            {
                this.state.is_connected ? (
                    <WebView source={{uri: 'http://localhost/webview'}} />
                ) : (
                    <View>
                        <Text>Oops, você está conectado</Text>                        
                    </View>
                )
            }
        );
    }
}
