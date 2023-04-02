import React from "react";
import { SvgProps } from "react-native-svg";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import { useTailwind } from "tailwind-rn";
import { getTimeDifference } from "../helpers/getTimeDifference";

interface GameCardPayload {
	icon: React.FC<SvgProps>
	createdAt: number
	style?: StyleProp<ViewStyle>,
	type?: 'loss' | 'win'
}

const GameCard: React.FC<GameCardPayload> = ({
	icon: Icon,
	type = 'loss',
	createdAt,
	style,
}) => {

	const tailwind = useTailwind();

	return (
		<View style={[
			tailwind("flex flex-row items-center rounded-md p-2"),
			tailwind(type === 'loss' ? "bg-rose-500/90" : "bg-emerald-700/70"),
			style
		]}>
			<Icon height={ 50 } width={ 50 } fill="#fff" fillOpacity={0.7} />
			<View style={ [ tailwind("ml-2") ] }>
				<Text style={ [ tailwind("text-3xl font-semibold uppercase text-white opacity-70") ] }>
					{ type }
				</Text>
				<Text style={ [ tailwind("text-sm text-white opacity-70") ] }>
					{ getTimeDifference(createdAt) }
				</Text>
			</View>
		</View>
	);
};

export default GameCard;