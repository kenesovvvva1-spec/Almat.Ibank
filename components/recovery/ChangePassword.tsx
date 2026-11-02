import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/AuthNavigator';
import Header from '../ui/Header';
import Input from '../ui/Input';
import Button from '../ui/Button';

type Props = NativeStackScreenProps<AuthStackParamList, 'ChangePassword'>;

const ChangePassword: React.FC<Props> = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = () => {
    navigation.navigate('SuccessScreen');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Header title="Новый пароль" onBackPress={() => navigation.goBack()} />

        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Создайте новый пароль</Text>
          <Text style={styles.subtitle}>
            Новый пароль должен отличаться от ранее использованных.
          </Text>

          <Input
            label="Новый пароль"
            placeholder="Введите новый пароль"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
          />

          <Input
            label="Повторите новый пароль"
            placeholder="Повторите новый пароль"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <View style={styles.buttonContainer}>
            <Button title="Сохранить" onPress={handleSave} />
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

export default ChangePassword;