//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

// create a component
class Day1 extends Component {
  constructor(navigator){
    super(navigator);
  }
  _jumpToDay() {
    this.props.navigation.navigate('Day2')
  }
  render() {
    return (
      <TouchableHighlight onPress={()=> this._jumpToDay()}>
          <View>
            <Text>go to Day2</Text>
          </View>
        </TouchableHighlight>
    );
  }
}

//make this component available to the app
export default Day1;
