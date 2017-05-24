import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SecondScene extends Component {
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
            <View><Text>Segunda cena</Text></View>
        );
    }
}
