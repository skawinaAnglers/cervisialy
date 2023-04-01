import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";

interface Props {
	name: string
	onPress?: () => void
}

const ButtonComponent: React.FC<Props> = ({ name, onPress }) => {
	const tailwind = useTailwind()

	return (
		<TouchableOpacity onPress={ onPress } style={[ tailwind('flex justify-center bg-emerald-900 py-6 rounded-lg') ]}>
			<Text style={[ tailwind('font-bold text-emerald-500 text-4xl text-center') ]}>
				{ name }
			</Text>
		</TouchableOpacity>
	)
}

export default ButtonComponent;