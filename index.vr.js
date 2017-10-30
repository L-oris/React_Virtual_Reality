import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';


const textBox = {
  fontSize: 0.8,
  fontWeight: '400',
  layoutOrigin: [0.5, 0.5],
  paddingLeft: 0.2,
  paddingRight: 0.2,
  position: 'absolute',
  textAlign: 'center'
}
const front = {
  backgroundColor: 'red',
  transform: [{translate: [0, 0, -3]}],
}
const back = {
  backgroundColor: 'blue',
  transform: [
    {translate: [0, 0, 3]},
    {rotateY: 180}
  ],
}
const left = {
  backgroundColor: 'green',
  transform: [
    {translate: [-3, 0, 0]},
    {rotateY: 90}
  ],
}
const right = {
  backgroundColor: 'yellow',
  transform: [
    {translate: [3, 0, 0]},
    {rotateY: -90}
  ],
}
const top = {
  backgroundColor: 'yellow',
  transform: [
    {translate: [0, 3, 0]},
    {rotateX: 90}
  ],
}
const bottom = {
  backgroundColor: 'brown',
  transform: [
    {translate: [0, -3, 0]},
    {rotateX: -90}
  ],
}


export default class reactVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text style={Object.assign({},textBox,front)}>
          Front
        </Text>
        <Text style={Object.assign({},textBox,back)}>
          Back
        </Text>
        <Text style={Object.assign({},textBox,left)}>
          Left
        </Text>
        <Text style={Object.assign({},textBox,right)}>
          Right
        </Text>
        <Text style={Object.assign({},textBox,top)}>
          Top
        </Text>
        <Text style={Object.assign({},textBox,bottom)}>
          Bottom
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('reactVR', () => reactVR);
