import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/pages/Home';
import OutraPagina from './src/pages/OutraPagina';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <AppStack.Navigator
          screenOptions={{
            cardStyle: {
              backgroundColor: '#f0f0c1',
            },
          }}>
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="OutraPagina" component={OutraPagina} />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
