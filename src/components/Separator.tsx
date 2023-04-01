import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import { useTailwind } from "tailwind-rn";

interface SeparatorPayload {
	title?: string;
	style?: StyleProp<ViewStyle>
}

const Separator: React.FC<SeparatorPayload> = ({ title = "OR", style }) => {

	const tailwind = useTailwind();

	return (
		<View style={ [ tailwind("mt-3 py-2 flex-row items-center justify-center my-4"), style ] }>
			<View style={ [ tailwind("w-1/3 mr-2 h-px bg-neutral-500") ] }/>
			<Text style={ [ tailwind("text-white font-light") ] }>{ title }</Text>
			<View style={ [ tailwind("w-1/3 ml-2 h-px bg-neutral-500") ] }/>
		</View>
	);
};

export default Separator;