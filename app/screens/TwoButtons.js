import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function TwoButton({route, navigation}) {

    const {button1, button2} = route.params;
    const calls = () => {
        console.log('Calls');
        navigation.navigate('option 2');
    }

    return (
        <ImageBackground
        style = {styles.image}
        source = {require('../assets/two-buttons.png')}
        >
            <TouchableHighlight style = {styles.calls}
            onPress = {calls}
            >
                <Text style = {styles.button}>{button1}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.calls}
            onPress = {() => alert('Not yet supported')}
            >
                <Text style = {styles.button}>{button2}</Text>
            </TouchableHighlight>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    calls: {
        height: '20%',
        width: '60%',
        backgroundColor: 'dodgerblue',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }
});