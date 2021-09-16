import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

const HomeNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeNav" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default HomeNav
