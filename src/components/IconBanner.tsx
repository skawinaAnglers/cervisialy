import React from "react";
import { useTailwind } from "tailwind-rn";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

interface IconBannerPayload {
	name: string
	icon?: React.FC<SvgProps>
	color?: string
	style?: StyleProp<ViewStyle>
}

const IconBanner: React.FC<IconBannerPayload> = ({
	name,
	icon: IconComponent,
	color = 'text-neutral-400',
	style,
}) => {

	const tailwind = useTailwind();

	return (
		<View style={ [ tailwind("flex flex-row items-center bg-neutral-700 rounded-md px-2 py-3"), style ] }>
			{
				IconComponent
					&&
					<IconComponent
						width={24}
						height={24}
						fill={tailwind(`text-${ color }`).color as string}
					/>
			}
			<Text style={ [ tailwind(`text-${ color } text-xl ml-2`) ] }>
				{ name }
			</Text>
		</View>
	);
};

export default IconBanner;