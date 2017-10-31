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
    title: 'Winter Snow'
  },
  {
    title: 'Resort'
  },
  {
    title: 'Island Garden'
  },
  {
    title: 'Abstract'
  }
]


export default class Tour extends Component {

  constructor(props){
    super(props)
    this.state = {
      showMenu: false
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

    const {showMenu} = this.state

    let menuButtonText = showMenu ? 'Close Menu' : 'Open Menu'

    return (
      <View>
        <Pano source={asset('pool.jpg')}/>

        <View
          onEnter={this.toggleMenu}
          style={styles.menuButton}>

          <Text
            style={styles.menuButtonText}>
            {menuButtonText}
          </Text>
        </View>

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
  },

  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 1,
    height: 1,
    borderRadius: 0.25,
    borderWidth: 0.03,
    backgroundColor: 'white'
  },

  menuItemText: {
    fontSize: 0.2,
    textAlign: 'center',
    color: 'black'
  }
})


AppRegistry.registerComponent('Tour',()=>Tour)
