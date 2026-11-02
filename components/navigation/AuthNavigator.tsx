import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Импорт экранов
import SignUpStep1 from '../auth/SignUpStep1';
import ForgotPassword1 from '../auth/ForgotPassword1';
import ForgotPassword2 from '../auth/ForgotPassword2';
import VerifyCode from '../recovery/VerifyCode';
import ChangePassword from '../recovery/ChangePassword';
import SuccessScreen from '../recovery/SuccessScreen';

// Типизация параметров навигации
export type AuthStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  SignUpStep1: undefined;
  ForgotPassword1: undefined;
  ForgotPassword2: undefined;
  VerifyCode: undefined;
  ChangePassword: undefined;
  SuccessScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

// Имитация заглушек для первых 2-х экранов, так как они у вас уже готовы
const PlaceholderScreen = () => null;

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignUpStep1"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="LoginScreen" component={PlaceholderScreen} />
      <Stack.Screen name="RegisterScreen" component={PlaceholderScreen} />
      <Stack.Screen name="SignUpStep1" component={SignUpStep1} />
      <Stack.Screen name="ForgotPassword1" component={ForgotPassword1} />
      <Stack.Screen name="ForgotPassword2" component={ForgotPassword2} />
      <Stack.Screen name="VerifyCode" component={VerifyCode} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;