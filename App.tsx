import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Icon } from '@expo/vector-icons/build/createIconSet';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Login') {
              iconName = focused ? 'log-in' : 'log-in-outline';
            } else if (route.name === 'Projects') {
              iconName = focused ? 'camera' : 'camera-outline';
            } else if (route.name === 'Tickets') {
              iconName = focused ? 'camera' : 'camera-outline';
            }
            return <Ionicons
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
            name={iconName} size={size} color={color} />;
          },
          tabBarStyle: { position: 'absolute' },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});