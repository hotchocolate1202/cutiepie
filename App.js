import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Pages/SplashScreen';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import AvaiableStock from './Pages/AvaiableStock';
import LowStock from './Pages/LowStock';
import OutStock from './Pages/OutStock';
import WarehouseList from './Pages/WarehouseList';
import NewWarehouse from './Pages/NewWarehouse';
import StoreList from './Pages/StoreList';
import NewStore from './Pages/NewStore';
import StockingPage from './Pages/StockingPage';
import NewItem from './Pages/NewItem';
import ItemDetail from './Pages/ItemDetail';
import AddTransaction from './Pages/AddTransaction';
import ManageStock from './Pages/ManageStock';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="AvaiableStock" component={AvaiableStock} />
        <Stack.Screen name="LowStock" component={LowStock} />
        <Stack.Screen name="OutStock" component={OutStock} />
        <Stack.Screen name="WarehouseList" component={WarehouseList} />
        <Stack.Screen name="NewWarehouse" component={NewWarehouse} />
        <Stack.Screen name="StoreList" component={StoreList} />
        <Stack.Screen name="NewStore" component={NewStore} />
        <Stack.Screen name="StockingPage" component={StockingPage} />
        <Stack.Screen name="NewItem" component={NewItem} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
        <Stack.Screen name="AddTransaction" component={AddTransaction} />
        <Stack.Screen name="ManageStock" component={ManageStock} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;