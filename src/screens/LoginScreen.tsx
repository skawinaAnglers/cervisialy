import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { useTailwind } from 'tailwind-rn'

const LoginScreen: React.FC = () => {
  const tailwind = useTailwind()

  return (
    <View style={[tailwind('px-6')]}>
      <SafeAreaView>
        <></>
      </SafeAreaView>
    </View>
  )
}

export default LoginScreen
