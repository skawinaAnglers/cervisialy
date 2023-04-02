import { StyleProp, Text, TouchableOpacity, ViewStyle, ActivityIndicator } from "react-native";
import React from "react"
import { useTailwind } from "tailwind-rn"

interface MainButtonPayload {
	name: string,
	onPress?: () => void,
	isLoading?: boolean,
	style?: StyleProp<ViewStyle>
	textStyle?: StyleProp<ViewStyle>
}

const MainButton: React.FC<MainButtonPayload> = ({ name, onPress, style, isLoading = false, textStyle }) => {
	const tailwind = useTailwind()

	return (
		<TouchableOpacity onPress={ onPress } style={[ tailwind('flex justify-center bg-emerald-900 py-6 rounded-lg'), style ]}>
			{
				isLoading ? (
					<ActivityIndicator 
						size={28}
					/>
				) : (
					<Text style={[ tailwind('font-semibold text-emerald-500 text-4xl text-center'), textStyle ]}>
						{ name }
					</Text>
				)
			}
			
		</TouchableOpacity>
	)
}

export default MainButton