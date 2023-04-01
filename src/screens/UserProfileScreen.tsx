import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import UserProfileHeader from "../components/UserProfileHeader";

const UserProfileScreen: React.FC = () => {

	const tailwind = useTailwind();

	return (
		<View style={ [ tailwind("px-6 pt-10 bg-neutral-900") ] }>
			<SafeAreaView>
				{/* <UserProfileHeader */}
				{/* 	userName="MagnushChase" */}
				{/* 	image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjOTPaJ4NL4G0ZlkwAKxhen7H7YSxUrfBXA&usqp=CAU" */}
				{/* /> */}
			</SafeAreaView>
		</View>
	);
};

export default UserProfileScreen;