import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
  <Text style={styles.text}>Hello there!- "GENERAL KENOBI"</Text>
  <Button title = "Components" 
  onPress = {() => navigation.navigate('Components')}
  />
  <Button 
  title = "List" 
  onPress = {() => navigation.navigate('List')}
  />
  
  <Button 
  title = "Image" 
  onPress = {() => navigation.navigate('Image')}
  />

<Button 
title = "Counter" 
onPress = {() => navigation.navigate('Counter')}
  />

<Button 
title = "Color" 
onPress = {() => navigation.navigate('Color')}
  />

<Button 
title = "Square" 
onPress = {() => navigation.navigate('Square')}
  />
<Button 
title = "Text" 
onPress = {() => navigation.navigate('Text')}
  />
  <Button 
title = "Box" 
onPress = {() => navigation.navigate('Box')}
  />
  {/* <TouchableOpacity onPress = {() => navigation.navigate('List')}>
    <Text> LISt </Text>
  </TouchableOpacity> */}
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// const BoxScreen = () => {
// return (
//     <View>
//         <Text>
//             Box Screen
//         </Text>
//     </View>

// )

// }


// const styles = StyleSheet.create({


// })

// export default BoxScreen;