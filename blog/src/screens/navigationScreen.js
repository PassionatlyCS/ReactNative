import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {blogPost} from '../screens/ShowScreen'
//Screens
import IndexScreen from './IndexScreen';
import ShowScreen from './ShowScreen';
import CreateScreen from './CreateScreen';


//icons
import {EvilIcons} from'@expo/vector-icons'
import {Feather} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import EditScreen from './EditScreen';

//code
const Stack = createNativeStackNavigator()


export const NavigationScreen = () => {
const blogPost => b
  
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Index'>
          
          <Stack.Screen name="Index" component={IndexScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity onPress= {() => navigation.navigate('Create')}>
              <Feather name="plus" size ={30}/>
              </TouchableOpacity>
            ),
          })}
          />
          <Stack.Screen name="Show" component={ShowScreen}
          options={(props) => ({
            headerRight: () => (
              <TouchableOpacity onPress= {() => navigation.navigate( 'Edit' ,{ }  )}>
              <EvilIcons name="pencil" size ={35}/>
              </TouchableOpacity>
              
            ),
          })}
          
          
          
          />
          <Stack.Screen name="Create" component={CreateScreen}
          
          />
          <Stack.Screen name="Edit" component={EditScreen}
          
          />
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