import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/AuthNavigator';
import Header from '../ui/Header';
import Input from '../ui/Input';
import Button from '../ui/Button';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUpStep1'>;

const SignUpStep1: React.FC<Props> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');

  const handleNext = () => {
    // Переход к следующему шагу (Забыли пароль / Восстановление)
    navigation.navigate('ForgotPassword1');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Header title="Доп. информация" onBackPress={() => navigation.goBack()} />

        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Шаг 2 из 2</Text>
          <Text style={styles.subtitle}>Укажите дополнительные данные для завершения регистрации</Text>

          <Input
            label="Номер телефона"
            placeholder="+7 (700) 000-00-00"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          <Input
            label="Город"
            placeholder="Введите ваш город"
            value={city}
            onChangeText={setCity}
          />

          <View style={styles.buttonContainer}>
            <Button title="Продолжить" onPress={handleNext} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1D1E',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6A6E71',
    marginBottom: 32,
    lineHeight: 20,
  },
  buttonContainer: {
    marginTop: 24,
  },
});

export default SignUpStep1;