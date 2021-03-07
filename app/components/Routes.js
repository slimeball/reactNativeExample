import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import Home from '../pages/Home';
import Stopwatch from '../pages/Stopwatch';
import Day2 from '../pages/Day2';
const Stack = createStackNavigator();

class Routes extends Component {
  backHome(navigation) {
    navigation.navigate('Home');
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Stopwatch" component={Stopwatch} />
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

export default Routes;
