import React, {Component} from 'react'

import {
  AppRegistry,
  asset,
  StyleSheet,
  View,
  Pano,
  Text
} from 'react-vr'


const places = [
  {
    title: 'Courtyard',
    env: 'courtyard.jpg'
  },
  {
    title: 'Station',
    env: 'station.jpg'
  },
  {
    title: 'Resort',
    env: 'resort.jpg'
  },
  {
    title: 'England',
    env: 'england.jpg'
  }
]


export default class Tour extends Component {

  constructor(props){
    super(props)
    this.state = {
      showMenu: false,
      environment: 'courtyard.jpg'
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.renderOptions = this.renderOptions.bind(this)
  }

  toggleMenu(){
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  renderOptions(){
    return (
      places.map((place,index)=>{
        return (
          <View
            key={index}
            onEnter={()=>this.setState({environment: place.env})}
            style={styles.menuItem}>
            <Text
              style={styles.menuItemText}>
              {place.title}
            </Text>
          </View>
        )
      })
    )
  }

  render(){

    const {showMenu,environment} = this.state

    let menuButtonText = showMenu ? 'Close Menu' : 'Open Menu'

    return (
      <View>
        <Pano source={asset(environment)}/>

        {/*TOGGLE MENU BUTTON*/}
        <View
          onEnter={this.toggleMenu}
          style={styles.menuButton}>

          <Text
            style={styles.menuButtonText}>
            {menuButtonText}
          </Text>
        </View>

        {/*MENU OPTIONS*/}
        <View
          style={styles.menu}>
          {showMenu && this.renderOptions()}
        </View>

      </View>
    )
  }

}


const styles = StyleSheet.create({

  menu: {
    width: 5,
    height: 1.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    layoutOrigin: [0.5,0.5],
    transform: [
      {translate: [0,0,-4]}
    ]
  },

  menuButton: {
    layoutOrigin: [0.5,0.5],
    transform: [
      {translate: [-3,0,-4]}
    ],
    backgroundColor: 'white',
    width: 0.6,
    height: 0.6,
    borderColor: 'grey',
    borderWidth: 0.02,
    borderRadius: 0.3,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },

  menuButtonText: {
    textAlign: 'center',
    fontSize: 0.15,
    color: 'black'
  },

  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 0.8,
    height: 0.8,
    borderRadius: 0.4,
    borderWidth: 0.02,
    backgroundColor: 'white'
  },

  menuItemText: {
    fontSize: 0.2,
    textAlign: 'center',
    color: 'black'
  }
})


AppRegistry.registerComponent('Tour',()=>Tour)
