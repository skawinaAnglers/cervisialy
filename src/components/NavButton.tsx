import React, { useMemo } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { SvgProps } from "react-native-svg"
import { useTailwind } from 'tailwind-rn'
import * as Haptics from 'expo-haptics'
import { useNavigation, useNavigationState } from '@react-navigation/native'

type NavButtonPayload = {
	text: string,
	icon: React.FC<SvgProps>,
	screenName: string
}

const NavButton: React.FC<NavButtonPayload> = ({
	text,
	icon: IconComponent,
	screenName
}) => {
	const tailwind = useTailwind()
	const { reset } = useNavigation()
  const currentRoute = useNavigationState((state) => state?.routes[(state?.routes.length || 1) - 1].name)

	const active = useMemo(() => currentRoute === screenName, [currentRoute])

	const onPress = () => {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
		reset({
			index: 0,
			routes: [
				{ name: screenName as never }
			]
		})
	}

	return (
		<TouchableOpacity
			style={[
				tailwind(`
					py-4 px-6 rounded-lg flex items-center justify-center
				`),
				active && tailwind('bg-neutral-900/5')
			]}
			onPress={onPress}
		>
			<IconComponent
				fill={tailwind(active ? 'text-emerald-600' : 'text-neutral-500').color as string}
				width={24}
				height={24}
			/>
			<Text
				style={[
					tailwind(`
						pt-2 text-sm
						${active ? 'text-emerald-500 font-semibold' : 'text-neutral-600'}
					`)
				]}
			>
				{text}
			</Text>
		</TouchableOpacity>
	)
}

export default NavButton