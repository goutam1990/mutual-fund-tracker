import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

class ManageFundsScreen extends Component {

    render() {
        return (
            <Toolbar
                leftElement="arrow-back"
                centerElement="Add Funds"
                onLeftElementPress={() => this.props.navigation.goBack()}
            />
        );
    }
}
export default ManageFundsScreen;

const styles = StyleSheet.create({
    
})