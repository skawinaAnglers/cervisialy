import React, { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import UserProfileHeader from "../components/UserProfileHeader";
import { StackNavigationProp } from "@react-navigation/stack";

interface AddPostParams {
	userId: string
}

const UserProfileScreen: React.FC<PropsWithChildren<any> & { route: StackNavigationProp<any> }> = ({ route }) => {

	const tailwind = useTailwind();

	const { userId } = route.params as AddPostParams;

	return (
		<View style={ [ tailwind("px-6 bg-neutral-900") ] }>
			<SafeAreaView>
				<UserProfileHeader
					userName={ `MagnushChase-${ userId }` }
					image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjOTPaJ4NL4G0ZlkwAKxhen7H7YSxUrfBXA&usqp=CAU"
				/>
			</SafeAreaView>
		</View>
	);
};

export default UserProfileScreen;