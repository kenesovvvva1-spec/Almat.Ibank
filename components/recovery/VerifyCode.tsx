import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/AuthNavigator';
import Header from '../ui/Header';
import Input from '../ui/Input';
import Button from '../ui/Button';

type Props = NativeStackScreenProps<AuthStackParamList, 'VerifyCode'>;

const VerifyCode: React.FC<Props> = ({ navigation }) => {
  const [code, setCode] = useState('');

  const handleVerify = () => {
    navigation.navigate('ChangePassword');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Header title="Код подтверждения" onBackPress={() => navigation.goBack()} />

        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Введите код</Text>
          <Text style={styles.subtitle}>
            Мы отправили 4-значный код подтверждения на ваш узел связи.
          </Text>

          <Input
            label="Код подтверждения"
            placeholder="1 2 3 4"
            value={code}
            onChangeText={setCode}
            keyboardType="number-pad"
          />

          <TouchableOpacity style={styles.resendContainer} activeOpacity={0.7}>
            <Text style={styles.resendText}>Отправить код повторно</Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <Button title="Подтвердить" onPress={handleVerify} />
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
  resendContainer: {
    marginTop: 8,
    alignItems: 'center',
  },
  resendText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0066FF',
  },
  buttonContainer: {
    marginTop: 32,
  },
});

export default VerifyCode;