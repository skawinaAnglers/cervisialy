import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { useTailwind } from 'tailwind-rn'
import Quote from '../components/Quote'
import RegularTextInput from '../components/RegularTextInput'
import UserIcon from '../assets/UserIcon'
import KeyIcon from '../assets/KeyIcon'
import MainButton from '../components/MainButton'
import { setUid } from '../store/slices/user'

const LoginScreen: React.FC = () => {
  const tailwind = useTailwind()
	const { reset } = useNavigation()
	const dispatch = useDispatch()
	const [login, setLogin] = React.useState<string>('')
	const [password, setPassword] = React.useState<string>('')

	const handleSubmit = () => {
		dispatch(setUid('test'))
		reset({
			index: 0,
			routes: [{ name: 'HomeScreen' as never }]
		} as never)
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
