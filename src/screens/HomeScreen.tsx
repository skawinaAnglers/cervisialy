import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text } from 'react-native'
import { useTailwind } from 'tailwind-rn'

const HomeScreen: React.FC = () => {
  const tailwind = useTailwind()

  return (
    <View style={[tailwind('px-6 bg-neutral-900')]}>
      <SafeAreaView>
				<Text style={ [ tailwind('font-bold text-3xl text-neutral-300 mt-2') ] }>
					Welcome, Jakub!
				</Text>
				<Text style={ [ tailwind('font-light text-2xl text-neutral-300 mt-2') ] }>
					We hope you&apos;re having a great day!
				</Text>

      </SafeAreaView>
    </View>
  )
}

export default HomeScreen
