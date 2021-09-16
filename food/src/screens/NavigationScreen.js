import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Screens
import SearchScreen from './SearchScreen';
import ResultsShowScreen from './ResultsShowScreen';


//code
const Stack = createStackNavigator()


export const NavigationScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Search'>
            
            <Stack.Screen name="Search"
            component={SearchScreen}
            options = {{title: 'Business Search'}}
            />
            <Stack.Screen name= "Results Show"
            component = {ResultsShowScreen}
            />
            {/* // in the future can add the name of the restuarant */}

            {/* <Stack.Screen name="Components" component={ComponentsScreen} />
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Image" component={ImageScreen} />
            <Stack.Screen name="Counter" component = {CounterScreen} />
            <Stack.Screen name="Color" component = {ColorScreen} />
            <Stack.Screen name="Square" component = {SquareScreen} />
            <Stack.Screen name="Text" component = {TextScreen} />
            <Stack.Screen name= "Box" component = {BoxScreen} /> */}
            
            </Stack.Navigator>
        </NavigationContainer>
      )
  }

  export default NavigationScreen