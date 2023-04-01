import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import Quote from '../components/Quote'

const LoginScreen: React.FC = () => {
  const tailwind = useTailwind()

  return (
    <View style={[tailwind('px-6 pt-10 bg-neutral-900')]}>
      <SafeAreaView>
				<Quote />
      </SafeAreaView>
    </View>
  )
}

export default LoginScreen
