import React from 'react';
import { ImageBackground, StyleSheet, TouchableHighlight, Text } from 'react-native';

const ChooseContacts = ({navigation}) => {
    return(
        <ImageBackground 
        style = {styles.image}
        source = {require('../assets/two-buttons.png')}
        >
            <TouchableHighlight style = {styles.calls}
            onPress = {() => alert('Not yet supported')}
            >
                <Text style = {styles.button}>Favourites</Text>
            </TouchableHighlight>
            <TouchableHighlight style = {styles.calls}
            onPress = {() => alert('Not yet supported')}
            >
                <Text style = {styles.button}>All Contacts</Text>
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
})

export default ChooseContacts