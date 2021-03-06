import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Feed from './pages/Feed';
import NewIncident from './pages/NewIncident';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Feed" component={Feed}/>
                <AppStack.Screen name="NewIncident" component={NewIncident}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}