import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import ComponentsScreen from '../screens/ComponentsScreen'

const Stack = createStackNavigator()

const ComponentsScreenNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ComponentsScreenNav" component={ComponentsScreen} />
    </Stack.Navigator>
  )
}

export default ComponentsScreenNav
