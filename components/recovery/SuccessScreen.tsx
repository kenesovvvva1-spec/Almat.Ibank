import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/AuthNavigator';
import Button from '../ui/Button';

type Props = NativeStackScreenProps<AuthStackParamList, 'SuccessScreen'>;

const SuccessScreen: React.FC<Props> = ({ navigation }) => {
  const handleFinish = () => {
    // Возвращаемся на самый первый экран (LoginScreen)
    navigation.popToTop();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Text style={styles.checkmark}>✓</Text>
        </View>

        <Text style={styles.title}>Успешно!</Text>
        <Text style={styles.subtitle}>
          Ваш пароль был успешно изменен. Теперь вы можете войти в свой аккаунт.
        </Text>

        <View style={styles.buttonWrapper}>
          <Button title="Войти в аккаунт" onPress={handleFinish} />
        </View>
      </View>
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
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#E6F4EA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkmark: {
    fontSize: 48,
    color: '#28A745',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1A1D1E',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#6A6E71',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 16,
    marginBottom: 40,
  },
  buttonWrapper: {
    width: '100%',
  },
});

export default SuccessScreen;