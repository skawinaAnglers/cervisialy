import React from "react";
import { useTailwind } from "tailwind-rn";
import { View, Image, Text } from "react-native";

interface UserProfilePayload {
	image: string
	userName: string
}

const UserProfileHeader: React.FC<UserProfilePayload> = ({
	image,
	userName,
}) => {
	const tailwind = useTailwind()

	return (
		<View style={ [ tailwind("flex items-center") ] }>
			<Image
				source={ { uri: image } }
				style={ [ tailwind("w-40 h-40 rounded-full mb-5") ] }
			/>
			<Text style={ [ tailwind("text-white text-2xl") ] }>
				{ userName }
			</Text>
		</View>
	);
};

export default UserProfileHeader;