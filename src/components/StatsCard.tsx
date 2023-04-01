import React from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { useTailwind } from "tailwind-rn";

interface StatsCardPayload {
	count: number | string
	title: string
	style?: StyleProp<ViewStyle>
}

const StatsCard: React.FC<StatsCardPayload> = ({
	count,
	title,
	style,
}) => {

	const tailwind = useTailwind();

	return (
		<View style={ [ style, tailwind("py-4 pr-8 pl-2 rounded-md") ] }>
			<Text style={ [ tailwind("font-bold text-2xl") ] }>
				{ count }
			</Text>
			<Text style={ [ tailwind("text-base") ] }>
				{ title }
			</Text>
		</View>
	);
};

export default StatsCard

