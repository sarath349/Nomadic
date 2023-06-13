import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home/Home';
import DrawerMenu from '../Components/DrawerMenu';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Deposit from './Deposit/Deposit';
import Withdraw from './Withdraw/Withdraw';
import Transfer from './Transfer/Transfer';
import Statement from './Statement/Statement';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import Icon from 'react-native-vector-icons/Ionicons';

// function MyDrawer() {
//   return (
//     <Drawer.Navigator
//     // screenOptions={{
//     //   drawerStyle: {},
//     // }}
//     // drawerContent={props => <DrawerMenu {...props} />}
//     >
//       <Drawer.Screen
//         name="Home"
//         component={Home}
//         options={{headerShown: false}}
//       />
//       <Drawer.Screen
//         name="Feed"
//         component={Home}
//         options={{headerShown: false}}
//       />
//     </Drawer.Navigator>
//   );
// }
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Deposit') {
            iconName = focused ? 'folder' : 'folder-outline';
          } else if (route.name === 'Withdraw') {
            iconName = focused ? 'ios-folder-sharp' : 'md-folder-open-outline';
          } else if (route.name === 'Transfer') {
            iconName = focused ? 'arrow-undo-sharp' : 'arrow-undo-outline';
          } else if (route.name === 'Statement') {
            iconName = focused ? 'clipboard' : 'clipboard-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Deposit"
        component={Deposit}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Withdraw"
        component={Withdraw}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Transfer"
        component={Transfer}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Statement"
        component={Statement}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={MyTabs}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
