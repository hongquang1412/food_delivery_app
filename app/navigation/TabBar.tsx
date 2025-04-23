import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import CartScreen from '../screens/Cart';
import ChatScreen from '../screens/Chat';
import ProfileScreen from '../screens/Profile';
import {TabBar} from '../components/TabBar';

export type TabParamList = {
  home: undefined;
  cart: undefined;
  chat: undefined;
  profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const CustomTabBar = (props: any) => <TabBar {...props} />;

const TabBarNavigation = () => {
  return (
    <Tab.Navigator tabBar={CustomTabBar}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false, title:'Home'}}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{headerShown: false, title:'Cart'}}
      />
      <Tab.Screen
        name="chat"
        component={ChatScreen}
        options={{headerShown: false, title:'Chat'}}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{headerShown: false, title:'Profile'}}
      />
    </Tab.Navigator>
  );
};

export default TabBarNavigation;
