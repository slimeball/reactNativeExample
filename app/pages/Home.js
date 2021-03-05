//import liraries
import React, { Component } from 'react';
import { ScrollView, View, Text, SafeAreaView, TouchableHighlight, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

// create a component
class Home extends Component {
  constructor(navigator) {
    super(navigator);
    this.state = {
      buttons: [
        {
          title: 'Day1'
        },
        {
          title: 'Day2'
        }
      ]
    }
  }
  _jumpToDay() {
    this.props.navigation.navigate('Day1')
  }
  render() {
    let Buttons = this.state.buttons.map((el, index)=>{
      return (
        <TouchableHighlight style={[styles.touchButton]} key={index} onPress={()=> this._jumpToDay()}>
          <View>
            <Text>{el.title}</Text>
          </View>
        </TouchableHighlight>
      )
    })
    return (
      <SafeAreaView>
        <ScrollView>
          <Swiper style={styles.wrapper}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
          <View>
            {Buttons}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({

  wrapper: {
    height: 200,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  touchButton: {
    width: 150
  }
});

//make this component available to the app
export default Home;
