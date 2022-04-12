import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import TwoButton from './app/screens/TwoButtons';
import ChooseContacts from './app/screens/ChooseContacts';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='home'
      screenOptions={{headerShown: false}}>
        <Stack.Screen
          name = 'home'
          component = {HomeScreen}
          options = {{title: 'welcome'}}
        />
        <Stack.Screen
          name = 'option 1'
          component={TwoButton}
          options = {{title: 'choose an option'}}
        />
        <Stack.Screen 
          name = 'option 2'
          component={ChooseContacts}
          options = {{title: 'choose an option'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
