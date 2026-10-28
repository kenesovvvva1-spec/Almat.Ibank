import React, { useState } from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	StatusBar,
} from 'react-native'

type Props = {
	goToRegister: () => void
}

export default function LoginScreen({ goToRegister }: Props) {
	const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='#3425B5' barStyle='light-content' />

			<View style={styles.header}>
				<Text style={styles.back}>‹</Text>
				<Text style={styles.headerTitle}>Sign in</Text>
			</View>

			<ScrollView
				style={styles.content}
				contentContainerStyle={styles.inner}
				keyboardShouldPersistTaps='handled'
			>
				<Text style={styles.title}>Welcome Back</Text>
				<Text style={styles.subtitle}>Hello there, sign in to continue</Text>

				<View style={styles.illustration}>
					<View style={styles.circle}>
						<Text style={styles.lock}>🔒</Text>
					</View>
					<View
						style={[
							styles.dot,
							{ top: 12, left: 35, backgroundColor: '#4333C5' },
						]}
					/>
					<View
						style={[
							styles.dot,
							{
								top: 32,
								right: 28,
								backgroundColor: '#FF4269',
								width: 13,
								height: 13,
							},
						]}
					/>
					<View
						style={[
							styles.dot,
							{ top: 65, left: 0, backgroundColor: '#4DD6C0' },
						]}
					/>
					<View
						style={[
							styles.dot,
							{
								bottom: 8,
								left: 24,
								backgroundColor: '#FFB12A',
								width: 11,
								height: 11,
							},
						]}
					/>
					<View
						style={[
							styles.dot,
							{ bottom: 14, right: 36, backgroundColor: '#2196F3' },
						]}
					/>
				</View>

				<TextInput
					style={styles.input}
					placeholder='Text input'
					placeholderTextColor='#BBBBBB'
					value={phone}
					onChangeText={setPhone}
					autoCapitalize='none'
				/>

				<View style={styles.passwordBox}>
					<TextInput
						style={styles.passwordInput}
						placeholder='Password'
						placeholderTextColor='#BBBBBB'
						secureTextEntry={!showPassword}
						value={password}
						onChangeText={setPassword}
					/>
					<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
						<Text style={styles.eye}>{showPassword ? 'Hide' : 'Show'}</Text>
					</TouchableOpacity>
				</View>

				<TouchableOpacity style={styles.forgot}>
					<Text style={styles.forgotText}>Forgot your password ?</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[
						styles.button,
						phone && password ? styles.buttonActive : null,
					]}
					disabled={!phone || !password}
					onPress={() => alert('Sign in pressed')}
				>
					<Text style={styles.buttonText}>Sign in</Text>
				</TouchableOpacity>

				<Text style={styles.fingerprint}>◉</Text>

				<View style={styles.bottom}>
					<Text style={styles.bottomText}>Don't have an account? </Text>
					<TouchableOpacity onPress={goToRegister}>
						<Text style={styles.link}>Sign Up</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#3425B5' },
	header: {
		height: 58,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 22,
	},
	back: { color: 'white', fontSize: 30, marginRight: 12 },
	headerTitle: { color: 'white', fontSize: 16, fontWeight: '600' },
	content: {
		flex: 1,
		backgroundColor: 'white',
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
	},
	inner: { paddingHorizontal: 22, paddingTop: 20, flexGrow: 1 },
	title: { color: '#3425B5', fontSize: 20, fontWeight: 'bold' },
	subtitle: { fontSize: 11, color: '#333', marginTop: 4 },
	illustration: {
		height: 160,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		width: 170,
		alignSelf: 'center',
		marginVertical: 18,
	},
	circle: {
		width: 125,
		height: 125,
		borderRadius: 65,
		backgroundColor: '#E9E6FF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	lock: { fontSize: 53 },
	dot: {
		position: 'absolute',
		width: 6,
		height: 6,
		borderRadius: 20,
	},
	input: {
		height: 46,
		borderWidth: 1,
		borderColor: '#DDDDDD',
		borderRadius: 12,
		paddingHorizontal: 14,
		fontSize: 13,
		marginBottom: 14,
		color: '#222',
	},
	passwordBox: {
		height: 46,
		borderWidth: 1,
		borderColor: '#DDDDDD',
		borderRadius: 12,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 14,
	},
	passwordInput: { flex: 1, fontSize: 13, color: '#222' },
	eye: { color: '#AAA', fontSize: 12 },
	forgot: { alignSelf: 'flex-end', marginTop: 9 },
	forgotText: { color: '#BBBBBB', fontSize: 11 },
	button: {
		height: 47,
		borderRadius: 12,
		backgroundColor: '#F0EFF8',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 32,
	},
	buttonActive: { backgroundColor: '#3425B5' },
	buttonText: { color: 'white', fontWeight: '600', fontSize: 13 },
	fingerprint: {
		fontSize: 58,
		color: '#4431C8',
		textAlign: 'center',
		marginTop: 18,
	},
	bottom: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 'auto',
		paddingTop: 24,
		paddingBottom: 30,
	},
	bottomText: { color: '#444', fontSize: 11 },
	link: { color: '#3425B5', fontSize: 11, fontWeight: 'bold' },
})
