import React, {useReducer} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_CHANGE = 15;
const reducer = (state, action) =>{
//state === {red: number, green: number, blue:number};
//action === { type: 'change_red' || 'change_green' || change_blue, amount: 15 || -15 }
switch (action.type){
case 'change_red':
    //never going to do sate.red = state.red -15
    return state.red + action.payload > 255 || state.red + action.payload < 0 
    ?state
    :{...state, red: state.red + action.payload }
case 'change_green':
    return state.green + action.payload > 255 || state.green + action.payload < 0 
    ?state
    :{...state, green: state.green + action.payload}
case 'change_blue':
    return state.blue + action.payload > 255 || state.blue + action.payload < 0 
    ?state
    :{...state, blue: state.blue + action.payload };
default:
    return state;
}
}
    


const SquareScreen = () => {

    
    
    const [state, dispatch] = useReducer(reducer, { red:0, green:0, blue:0});
    const {red, green, blue} = state;


console.log("red:" + red)
console.log("Green:" +green)
console.log("Blue:"+blue)


return (
    <View>
    <Text>
        Square Screen
    </Text>
    <ColorCounter 
    onIncrease = {() => dispatch ({ type: 'change_red', payload: COLOR_CHANGE})}
    onDecrease = {() => dispatch ({ type: 'change_red', payload: -1 * COLOR_CHANGE})}
    color="Red" 
    />
    <ColorCounter
    onIncrease = {() => dispatch ({ type: 'change_blue',  payload: COLOR_CHANGE})}
    onDecrease = {() => dispatch ({ type: 'change_blue',  payload: -1 * COLOR_CHANGE})}
    color="Blue"
    />
    
    <ColorCounter
    onIncrease = {() => dispatch ({ type: 'change_green',  payload: COLOR_CHANGE})}
    onDecrease = {() => dispatch ({ type: 'change_green',  payload:-1* COLOR_CHANGE})}
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