import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/AuthNavigator';
import Header from '../ui/Header';
import Input from '../ui/Input';
import Button from '../ui/Button';

type Props = NativeStackScreenProps<AuthStackParamList, 'ForgotPassword1'>;

const ForgotPassword1: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendCode = () => {
    navigation.navigate('ForgotPassword2');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Header title="Забыли пароль?" onBackPress={() => navigation.goBack()} />

        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Восстановление доступа</Text>
          <Text style={styles.subtitle}>
            Введите ваш Email, указанный при регистрации. Мы отправим вам код подлинности.
          </Text>

          <Input
            label="Email"
            placeholder="example@mail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <View style={styles.buttonContainer}>
            <Button title="Отправить код" onPress={handleSendCode} />
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

export default ForgotPassword1;