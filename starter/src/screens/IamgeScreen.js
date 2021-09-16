import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
return (
    <View>
    <ImageDetail title = "Forest"
     imageSource= {require('../../assets/images/forest.jpg')} 
     imageScore="The image score is - 9"
     />
    <ImageDetail title = "Beach"
     imageSource= {require('../../assets/images/beach.jpg')}  
     imageScore="The image score is - 2"
     />
    <ImageDetail title = "Mountain"
     imageSource= {require('../../assets/images/mountain.jpg')}
     imageScore="The image score is - 1"
     />        
    <Text>
        Image Screen
    </Text>
    
    </View>
)

}

const styles = StyleSheet.create ({})

export default ImageScreen; 