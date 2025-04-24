import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardingScreen from '../screens/Onboarding';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import OTPVerificationScreen from '../screens/OtpVerification';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import NotificationScreen from '../screens/Notification';
import OrderEmptyScreen from '../screens/OrderEmpty';
import ResetPasswordScreen from '../screens/ResetPassword';
import SearchScreen from '../screens/Search';
import ProductDetailScreen from '../screens/ProducDetail';
import ChatDetailScreen from '../screens/ChatDetail';
import PersonalDataScreen from '../screens/PersonalData';
import SettingsScreen from '../screens/Settings';
import HelpCenterScreen from '../screens/HelpCenter';
import TabBar, {TabParamList} from './TabBar';
import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  onboarding: undefined;
  forgotPassword: undefined;
  otpVerification: undefined;
  login: undefined;
  register: undefined;
  notification: undefined;
  orderEmpty: undefined;
  resetPassword: undefined;
  search: undefined;
  productDetail: {id: number};
  chatDetail: undefined;
  personalData: undefined;
  settings: undefined;
  helpCenter: undefined;
  tabBar: NavigatorScreenParams<TabParamList>;
};

// type của navigation
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="onboarding">
      <Stack.Screen
        name="tabBar"
        component={TabBar}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="onboarding"
        component={OnBoardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forgotPassword"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="otpVerification"
        component={OTPVerificationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="notification"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="orderEmpty"
        component={OrderEmptyScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="resetPassword"
        component={ResetPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="productDetail"
        component={ProductDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="chatDetail"
        component={ChatDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="personalData"
        component={PersonalDataScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="settings"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="helpCenter"
        component={HelpCenterScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
