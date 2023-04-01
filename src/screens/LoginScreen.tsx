import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import Quote from '../components/Quote'
import RegularTextInput from '../components/RegularTextInput'
import UserIcon from '../assets/UserIcon'
import KeyIcon from '../assets/KeyIcon'

const LoginScreen: React.FC = () => {
  const tailwind = useTailwind()
	const [login, setLogin] = React.useState<string>('')
	const [password, setPassword] = React.useState<string>('')

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
      </SafeAreaView>
    </View>
  )
}

export default LoginScreen
