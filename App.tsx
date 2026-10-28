import React, { useState, useEffect } from 'react'
import { BackHandler } from 'react-native'

import LoginScreen from './assets/screens/LoginScreen'
import RegisterScreen from './assets/screens/RegisterScreen'

type Screen = 'login' | 'register'

export default function App() {
	const [screen, setScreen] = useState<Screen>('login')

	useEffect(() => {
		const subscription = BackHandler.addEventListener(
			'hardwareBackPress',
			() => {
				if (screen === 'register') {
					setScreen('login')
					return true
				}
				return false
			},
		)

		return () => subscription.remove()
	}, [screen])

	if (screen === 'register') {
		return <RegisterScreen goToLogin={() => setScreen('login')} />
	}

	return <LoginScreen goToRegister={() => setScreen('register')} />
}
