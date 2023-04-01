import { Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";
import React from "react";

interface SmallerMainButtonPayload {
	name: string,
	onPress?: () => void
}

const SmallerMainButton: React.FC<SmallerMainButtonPayload> = ({ name, onPress, }) => {

	const tailwind = useTailwind();

	return (
		<TouchableOpacity onPress={ onPress } style={ [ tailwind("flex justify-center bg-emerald-900 py-4 rounded-lg") ] }>
			<Text style={ [ tailwind("font-semibold text-emerald-500 text-base text-center") ] }>
				{ name }
			</Text>
		</TouchableOpacity>
	);
};

export default SmallerMainButton;

