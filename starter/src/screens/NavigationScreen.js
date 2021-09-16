import React from 'react'
// import { NavigationContainer } from '@react-navigation/stack'

// //import { NavigationContainer } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import ComponentsScreen from './ComponentsScreen'
import HomeScreen from './HomeScreen'
import ListScreen from './ListScreen'
import ImageScreen from './IamgeScreen';
import CounterScreen from './CounterScreen';
import ColorScreen from './ColorScreen';
import SquareScreen from './SquareScreen';
import TextScreen from './TextScreen';
import BoxScreen from './BoxScreen';

//code
const Stack = createStackNavigator()


export const NavigationScreen = () => {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
          
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Components" component={ComponentsScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Image" component={ImageScreen} />
          <Stack.Screen name="Counter" component = {CounterScreen} />
          <Stack.Screen name="Color" component = {ColorScreen} />
          <Stack.Screen name="Square" component = {SquareScreen} />
          <Stack.Screen name="Text" component = {TextScreen} />
          <Stack.Screen name= "Box" component = {BoxScreen} />
          
          </Stack.Navigator>
      </NavigationContainer>
    )
  }

  export default NavigationScreen