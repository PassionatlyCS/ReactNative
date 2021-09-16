import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_CHANGE = 15;

const SquareScreen = () => {
const [red, setRed] = useState (0);
const [green, setGreen] = useState (0);
const [blue, setBlue] = useState (0);

//helper function
const setColor = (color, change ) =>
{
        //color is red, gren blue
        //change === +15 or -15
    switch (color)
    {
        case 'red':
            (((red + change) > 255) || ((red + change) <0))? null: setRed(red+change);
            return;
        case 'green':
            (((green + change) > 255) || ((green + change) <0))? null: setGreen(green+change);
            return;
        case 'blue':
            (((blue + change) > 255) || ((blue + change) <0))? null: setBlue(blue+change);
            return;    
    }


}

console.log("red:" + red)
console.log("Green:" +green)
console.log("Blue:"+blue)


return (
    <View>
    <Text>
        Square Screen
    </Text>
    <ColorCounter 
    onIncrease = {() => setColor ('red', COLOR_CHANGE)}
    onDecrease = {() => setColor ('red',-1* COLOR_CHANGE)}
    color="Red" 
    />
    <ColorCounter
    onIncrease = {() => setColor ('blue', COLOR_CHANGE)}
    onDecrease = {() => setColor ('blue', -1 * COLOR_CHANGE)}
    color="Blue"
    />
    
    <ColorCounter
    onIncrease = {() => setColor ('green', COLOR_CHANGE)}
    onDecrease = {() => setColor ('green', -1 * COLOR_CHANGE)}
    color="Green"
    />

    <View style= {{
        height: 150,
        width:150, 
        backgroundColor: `rgb(${red},${green},${blue})`
    }}
/>
    </View>
)

}

const styles = StyleSheet.create ({})

export default SquareScreen; 