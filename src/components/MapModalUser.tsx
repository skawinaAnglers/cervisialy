import React from "react";
import { View, Image } from "react-native";
import { useTailwind } from "tailwind-rn";

interface MapModalUserPayload {
	image: string
}

const MapModalUser: React.FC<MapModalUserPayload> = ({ image }) => {

	const tailwind = useTailwind();

	return (
		<View style={ [ tailwind("rounded-full h-20 w-20") ] }>
			<Image source={ { uri: image } } style={ [ tailwind("w-full h-full rounded-full") ] }/>
		</View>
	);
};

export default MapModalUser;