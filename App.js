import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Pages/SplashScreen';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import WarehouseList from './Pages/WarehouseList';
import StoreList from './Pages/StoreList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="WarehouseList" component={WarehouseList} />
        <Stack.Screen name="StoreList" component={StoreList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;