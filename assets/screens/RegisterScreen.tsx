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
	goToLogin: () => void
}

export default function RegisterScreen({ goToLogin }: Props) {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')
	const [agreed, setAgreed] = useState(false)
	const [showPassword, setShowPassword] = useState(false)

	const canSubmit = !!(name.trim() && phone.trim() && password && agreed)

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='#3425B5' barStyle='light-content' />

			<View style={styles.header}>
				<TouchableOpacity onPress={goToLogin}>
					<Text style={styles.back}>‹</Text>
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Sign up</Text>
			</View>

			<ScrollView
				style={styles.content}
				contentContainerStyle={styles.inner}
				keyboardShouldPersistTaps='handled'
			>
				<Text style={styles.title}>Welcome to us,</Text>
				<Text style={styles.subtitle}>Hello there, create New account</Text>

				<View style={styles.illustration}>
					<View style={styles.circle}>
						<Text style={styles.phoneIcon}>▣</Text>
						<Text style={styles.phoneDetail}>♧</Text>
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
					placeholder='Name'
					placeholderTextColor='#BBB'
					value={name}
					onChangeText={setName}
				/>

				<TextInput
					style={styles.input}
					placeholder='Text input'
					placeholderTextColor='#BBB'
					value={phone}
					onChangeText={setPhone}
				/>

				<View style={styles.passwordBox}>
					<TextInput
						style={styles.passwordInput}
						placeholder='Password'
						placeholderTextColor='#BBB'
						value={password}
						onChangeText={setPassword}
						secureTextEntry={!showPassword}
					/>
					<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
						<Text style={styles.eye}>{showPassword ? 'Hide' : 'Show'}</Text>
					</TouchableOpacity>
				</View>

				<TouchableOpacity
					style={styles.terms}
					onPress={() => setAgreed(!agreed)}
					activeOpacity={0.8}
				>
					<View style={[styles.checkbox, agreed && styles.checked]}>
						{agreed && <Text style={styles.checkMark}>✓</Text>}
					</View>
					<Text style={styles.termsText}>
						By creating an account your agree{'\n'}
						to our <Text style={styles.link}>Term and Conditions</Text>
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[styles.button, canSubmit && styles.buttonActive]}
					disabled={!canSubmit}
					onPress={() => alert('Sign up pressed')}
				>
					<Text style={styles.buttonText}>Sign up</Text>
				</TouchableOpacity>

				<View style={styles.bottom}>
					<Text style={styles.bottomText}>Have an account? </Text>
					<TouchableOpacity onPress={goToLogin}>
						<Text style={styles.link}>Sign In</Text>
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
		backgroundColor: '#F1F0F8',
		alignItems: 'center',
		justifyContent: 'center',
	},
	phoneIcon: { fontSize: 67, color: '#5146B9' },
	phoneDetail: {
		position: 'absolute',
		fontSize: 24,
		color: '#5146B9',
		top: 53,
	},
	dot: {
		position: 'absolute',
		width: 6,
		height: 6,
		borderRadius: 20,
	},
	input: {
		height: 46,
		borderWidth: 1,
		borderColor: '#DDD',
		borderRadius: 12,
		paddingHorizontal: 14,
		fontSize: 13,
		marginBottom: 14,
		color: '#222',
	},
	passwordBox: {
		height: 46,
		borderWidth: 1,
		borderColor: '#DDD',
		borderRadius: 12,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 14,
	},
	passwordInput: { flex: 1, fontSize: 13, color: '#222' },
	eye: { color: '#AAA', fontSize: 12 },
	terms: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		marginTop: 18,
	},
	checkbox: {
		width: 19,
		height: 19,
		borderWidth: 1,
		borderColor: '#DDD',
		marginRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	checked: { backgroundColor: '#3425B5', borderColor: '#3425B5' },
	checkMark: { color: 'white', fontSize: 13 },
	termsText: { fontSize: 12, color: '#333', lineHeight: 18 },
	link: { color: '#3425B5', fontWeight: 'bold', fontSize: 12 },
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
	bottom: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 'auto',
		paddingTop: 24,
		paddingBottom: 30,
	},
	bottomText: { color: '#444', fontSize: 11 },
})
