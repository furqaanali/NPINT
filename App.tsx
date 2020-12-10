import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react';
import Login from './components/Login/Login';
import ParkActivities from './components/ParkInfo/Activities';
import { ParkAlerts } from './components/ParkInfo/Alerts';
import { ParkDescription } from './components/ParkInfo/Description';
import ParkFeatures from './components/ParkInfo/Features';
import ParkHistory from './components/ParkInfo/History';
import ParkMoreInfo from './components/ParkInfo/Info';
import MenuScreen from './components/ParkInfo/MenuScreen';
import ParkSelection from './components/ParkInfo/Selection';
import ParkServices from './components/ParkInfo/Services';
import ParkTourGuides from './components/ParkInfo/TourGuides';
import UserAccount from './components/ParkInfo/UserAccount';
import ParkWeatherForecast from './components/ParkInfo/Weather';
import store from './components/state/store';
import useCachedResources from './hooks/useCachedResources';
import { Provider } from 'react-redux'
import useColorScheme from './hooks/useColorScheme';
import { ParkMaps } from './components/ParkInfo/Maps';

const Drawer = createStackNavigator();

export default function App() {
  //const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

 
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login"
      headerMode="none"
      
      >
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Drawer.Screen 
        name="Park Selection" 
        component={ParkSelection}
        options={{ title: 'Park Selection' }}/>
        <Drawer.Screen
        name="Park Description"
        component={ParkDescription}
        options={{ title: 'Park Description' }} /> 
        <Drawer.Screen
        name="Park Maps"
        component={ParkMaps}
        options={{title: 'Park Maps'}}/>
        <Drawer.Screen 
        name="Park History" 
        component={ParkHistory}
        options={{ title: 'Park History' }}/>
        <Drawer.Screen 
        name="Park Features" 
        component={ParkFeatures}
        options={{ title: 'Park Features' }}/>
        <Drawer.Screen 
        name="Park Services" 
        component={ParkServices}
        options={{ title: 'Park Services' }}/>
        <Drawer.Screen 
        name="Park Activities" 
        component={ParkActivities}
        options={{ title: 'Park Activities' }}/>
        <Drawer.Screen 
        name="Park Tour Guides" 
        component={ParkTourGuides}
        options={{ title: 'Park Tour Guides' }}/>
        <Drawer.Screen 
        name="Weather Forecast" 
        component={ParkWeatherForecast}
        options={{ title: 'Weather Forecast' }}/>
        <Drawer.Screen 
        name="Park Alerts" 
        component={ParkAlerts}
        options={{ title: 'Park Alerts' }}/>
        <Drawer.Screen 
        name="Menu Screen" 
        component={MenuScreen}
        options={{ title: 'Menu Screen' }}/>
        <Drawer.Screen 
        name="More Info" 
        component={ParkMoreInfo}
        options={{ title: 'More Info' }}/>
        <Drawer.Screen 
        name="User Account" 
        component={UserAccount}
        options={{ title: 'User Account' }}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
