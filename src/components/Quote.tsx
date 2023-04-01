import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'

const Quote = () => {
	const tailwind = useTailwind()

	return (
		<View style={[
			tailwind('flex flex-col w-full')
		]}>
			<Text style={[
				tailwind('font-semibold text-white pr-20 text-lg')
			]}>
				Humankind was built on beer.
				From the world&apos;s first writing,
				to its first laws, in rituals social,
				religious, and political,
				civilization is soaked in beer.
			</Text>
			<Text style={[
				tailwind('text-right font-light text-white text-lg')
			]}>
				- William Bostwick
			</Text>
		</View>
	)
}

export default Quote