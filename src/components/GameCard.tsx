import React from "react";
import { SvgProps } from "react-native-svg";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import { useTailwind } from "tailwind-rn";

interface GameCardPayload {
	icon: React.FC<SvgProps>
	title: string
	date: string
	style?: StyleProp<ViewStyle>
}

const GameCard: React.FC<GameCardPayload> = ({
	icon: Icon,
	title,
	date,
	style,
}) => {

	const tailwind = useTailwind();

	return (
		<View style={ [ style, tailwind("flex flex-row items-center rounded-md p-2") ] }>
			<Icon height={ 50 } width={ 50 }/>
			<View style={ [ tailwind("ml-2") ] }>
				<Text style={ [ tailwind("text-3xl") ] }>
					{ title }
				</Text>
				<Text style={ [ tailwind("text-sm") ] }>
					{ date }
				</Text>
			</View>
		</View>
	);
};

export default GameCard;