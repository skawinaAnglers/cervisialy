import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

const AddPostScreen: React.FC = () => {

	const tailwind = useTailwind();

	return (
		<View style={ [ tailwind("px-6 pt-10 bg-neutral-900") ] }>
			<SafeAreaView>
				<Text>
					Add post
				</Text>
			</SafeAreaView>
		</View>
	);
};

export default AddPostScreen;