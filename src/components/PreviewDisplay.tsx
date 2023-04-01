import React from "react";
import { useTailwind } from "tailwind-rn";
import { View, Image, StyleProp, ViewStyle } from "react-native";

interface PreviewDisplayPayload {
	mainImage: string;
	secondaryImage: string;
	style?: StyleProp<ViewStyle>,
}

const PreviewDisplay: React.FC<PreviewDisplayPayload> = ({
	mainImage,
	secondaryImage,
	style,
}) => {

	const tailwind = useTailwind();
	return (
		<View style={ [ tailwind("relative w-full border-4 border-emerald-900 rounded-md"), style, { aspectRatio: 1 } ] }>
			<Image source={ { uri: mainImage } } style={ [ tailwind("w-full h-full") ] }/>
			<Image source={ { uri: secondaryImage } } style={ [ tailwind("absolute top-5 right-5 w-24 h-24 rounded-md") ] }/>
		</View>
	);
};

export default PreviewDisplay;