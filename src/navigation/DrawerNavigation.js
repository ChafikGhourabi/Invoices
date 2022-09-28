import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import ClientsScreen from '../screens/ClientsScreen';
import InvoicesScreen from '../screens/InvoicesScreen';
import ItemsScreen from '../screens/ItemsScreen';
import SettingScreen from '../screens/SettingScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Invoices">
        <Drawer.Screen name="Invoices" component={InvoicesScreen} />
        <Drawer.Screen name="Clients" component={ClientsScreen} />
        <Drawer.Screen name="Items" component={ItemsScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigation;
