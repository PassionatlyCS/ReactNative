// Part 1: import 
// Part 2: create component
// Part 3: StyleSheet
// Part 4: Export component

// Part 1
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Part 2
const ComponentsScreen = () => {
    const greeting = 'My name what, my name is who, my name is slim shady'
    return <View>
        <Text style = {styles.textStyle}>Getting started with react native</Text>
        <Text style = {styles.subHeaderStyle}>{greeting} </Text>
    </View>

};

// Part 3
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle:
    {
        fontSize: 20
    }
})

export default ComponentsScreen;