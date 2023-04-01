import React from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

interface SeparatorPayload {
	title?: string;
}

const Separator: React.FC<SeparatorPayload> = ({ title = "OR" }) => {

	const tailwind = useTailwind();

	return (
		<View style={ [ tailwind("mt-3 py-2 flex-row items-center justify-center") ] }>
			<View style={ [ tailwind("w-1/3 mr-2 h-px bg-neutral-500") ] }/>
			<Text style={ [ tailwind("text-white font-light") ] }>{ title }</Text>
			<View style={ [ tailwind("w-1/3 ml-2 h-px bg-neutral-500") ] }/>
		</View>
	);
};

export default Separator;