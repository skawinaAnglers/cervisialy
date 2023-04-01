import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import {
	TouchableOpacity,
	ActivityIndicator,
	StyleProp,
	ViewStyle,
	Text
} from 'react-native'
import { SvgProps } from 'react-native-svg'
import { useTailwind } from "tailwind-rn"

type FeatureButtonPayload = {
	text: string,
	onPress: () => void,
	isLoading?: boolean,
	isDisabled?: boolean,
	style?: StyleProp<ViewStyle>,
	colorHex: string,
	vertical?: boolean,
	icon: React.FC<SvgProps>
}

const FeatureButton: React.FC<FeatureButtonPayload> = ({
	text,
	onPress,
	isLoading = false,
	isDisabled = false,
	style,
	colorHex,
	vertical = false,
	icon: IconComponent,
}) => {
	const tailwind = useTailwind()

	return (
		<TouchableOpacity
			style={[
				tailwind('mt-6 w-full py-4 px-4 border-2 rounded-lg flex flex-row items-center justify-between'),
				{
					shadowOpacity: 1,
					borderColor: colorHex,
					shadowColor: colorHex,
					shadowRadius: 5,
				},
				(isLoading || isDisabled) && tailwind('opacity-50'),
				vertical && tailwind('flex-col w-1/2'),
				vertical && { aspectRatio: 1.2 },
				style
			]}
			disabled={isDisabled || isLoading}
			onPress={onPress}
		>
			{
				isLoading ? (
					<ActivityIndicator 
						size={28}
						color={colorHex}
					/>
				) : (
					<Text
						style={[
							tailwind('text-right text-xl font-light'),
							vertical && tailwind('text-center'),
							{ color: colorHex }
						]}
					>
						{text}
					</Text>
				)
			}

			<IconComponent width={24} height={24} fill={colorHex} />
		</TouchableOpacity>
	)
}

export default FeatureButton