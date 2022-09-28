import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import ClientsScreen from '../screens/ClientsScreen';
import InvoicesScreen from '../screens/InvoicesScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Invoices">
        <Drawer.Screen name="Invoices" component={InvoicesScreen} />
        <Drawer.Screen name="Clients" component={ClientsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigation;
