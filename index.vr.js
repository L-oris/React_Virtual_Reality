import React, {Component} from 'react'

import {
  AppRegistry,
  asset,
  StyleSheet,
  View,
  Pano,
  Text
} from 'react-vr'


export default class Tour extends Component {

  render(){
    return (
      <View>
        <Pano source={asset('pool.jpg')}/>

        <View style={styles.menuButton}>
          <Text style={styles.menuButtonText}>
            Open Menu
          </Text>
        </View>

      </View>
    )
  }

}


const styles = StyleSheet.create({
  menuButton: {
    transform: [
      {translate: [0,0,-4]}
    ],
    backgroundColor: 'white',
    width: 0.8,
    height: 0.8,
    borderColor: 'grey',
    borderWidth: 0.05,
    borderRadius: 0.2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },

  menuButtonText: {
    textAlign: 'center',
    fontSize: 0.2,
    color: 'black'
  }
})


AppRegistry.registerComponent('Tour',()=>Tour)
