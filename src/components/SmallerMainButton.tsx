import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import { useTailwind } from "tailwind-rn";
import React from "react";

interface SmallerMainButtonPayload {
	name: string,
	onPress?: () => void
	style?: StyleProp<ViewStyle>
}

const SmallerMainButton: React.FC<SmallerMainButtonPayload> = ({ name, onPress, style, }) => {

	const tailwind = useTailwind();

	return (
		<TouchableOpacity onPress={ onPress } style={ [ tailwind("flex px-8 justify-center bg-emerald-900 py-4 rounded-lg"), style ] }>
			<Text style={ [ tailwind("font-semibold text-emerald-500 text-base text-center") ] }>
				{ name }
			</Text>
		</TouchableOpacity>
	);
};

export default SmallerMainButton;

