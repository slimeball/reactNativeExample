//import liraries
import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import Home from '../pages/Home';
import Day1 from '../pages/Day1';
import Day2 from '../pages/Day2';
const Stack = createStackNavigator();

// create a component
class Routes extends Component {
  backHome(navigation) {
    console.log(1)
    navigation.navigate('Home');
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Day1" component={Day1} />
          <Stack.Screen name="Day2" component={Day2} options={({ navigation }) => ({
            headerRight: () => (
              <Button
                onPress={()=> this.backHome(navigation)}
                title="Back Home"
              />
            ),
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

//make this component available to the app
export default Routes;
