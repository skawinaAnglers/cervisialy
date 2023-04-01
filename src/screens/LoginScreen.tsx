import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, Image } from 'react-native'
import { signInAnonymously } from "firebase/auth"
import { useTailwind } from 'tailwind-rn'
import Toast from 'react-native-toast-message'
import { auth } from '../helpers/setupFirebaseApp'
import Quote from '../components/Quote'
import RegularTextInput from '../components/RegularTextInput'
import UserIcon from '../assets/UserIcon'
import KeyIcon from '../assets/KeyIcon'
import MainButton from '../components/MainButton'

const LoginScreen: React.FC = () => {
  const tailwind = useTailwind()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [login, setLogin] = React.useState<string>('')
	const [password, setPassword] = React.useState<string>('')

	const handleSubmit = async () => {
		setIsLoading(true)
		try {
			const firebaseCredential = await signInAnonymously(auth)
			if (!firebaseCredential || !firebaseCredential.user)
				throw new Error('Something went wrong. Please, try again later.')
		} catch (error) {
			Toast.show({
				type: 'error',
				text1: 'Error',
				text2: error instanceof Error ? error.message : 'Unknown error'
			})
		}
		setIsLoading(false)
	}
  return (
    <View style={[tailwind('px-6 pt-10 bg-neutral-900')]}>
      <SafeAreaView>
				<Quote />
				<RegularTextInput 
					placeholder="Login"
					style={[tailwind('mt-6')]}
					value={login}
					onChangeText={setLogin}
					icon={UserIcon}
				/>
				<RegularTextInput 
					placeholder="Password"
					style={[tailwind('mt-4')]}
					value={password}
					switchVisibility
					onChangeText={setPassword}
					icon={KeyIcon}
				/>
				
				<View style={[tailwind('mt-6')]} />
				<MainButton
					isLoading={isLoading}
					name="Sign in"
					onPress={handleSubmit}
				/>
				<Text style={ [ tailwind('font-light text-sm text-neutral-300 text-center mt-2') ] }>
					By signing in you accept our Terms & Condition
					and Privacy Policy
				</Text>

				<Image 
					source={require('../../assets/HomeScreenImage.png')}
					style={[tailwind('mt-12')]}
				/>
      </SafeAreaView>
    </View>
  )
}

export default LoginScreen;
