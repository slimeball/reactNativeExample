import React, { Component } from 'react';
import { ScrollView, View, Text, SafeAreaView, TouchableHighlight } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../assets/style/HomeStyle';

class Home extends Component {
  constructor(navigator) {
    super(navigator);
    this.state = {
      buttons: [
        {
          title: 'Stopwatch'
        },
        {
          title: 'To Day2'
        },
        {
          title: 'To Day3'
        },
        {
          title: 'To Day4'
        }
      ]
    }
  }
  _jumpToDay(title) {
    this.props.navigation.navigate(title);
  }
  render() {
    let Buttons = this.state.buttons.map((el, index)=>{
      return (
        <TouchableHighlight style={[styles.touchButton]} underlayColor="#eee" key={index} onPress={()=> this._jumpToDay(el.title)}>
          <View>
            <Text>{el.title}</Text>
          </View>
        </TouchableHighlight>
      )
    })
    return (
      <SafeAreaView>
        <ScrollView style={styles.main}> 
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
          <View style={styles.buttonList}>
            {Buttons}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;
