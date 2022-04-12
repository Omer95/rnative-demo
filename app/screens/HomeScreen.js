import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function HomeScreen({navigation}) {

    const createGroup = () => {
        console.log('creating group');
        navigation.navigate('option 1', {
            button1: 'Calls',
            button2: 'Calls & Text'
        });
    }

    return (
        <ImageBackground 
        style = {styles.image}
        source = {require('../assets/home-screen.png')}
        >
            <TouchableHighlight style = {styles.joinGroup}
            onPress = {createGroup}
            >
                <Text style = {styles.button}>Create Group</Text>
            </TouchableHighlight>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    button: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    joinGroup: {
        width: '60%',
        height: '20%',
        backgroundColor: '#fccf9f',
        borderRadius: 20,
        top: -100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
