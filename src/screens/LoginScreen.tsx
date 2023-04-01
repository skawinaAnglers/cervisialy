import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import Quote from "../components/Quote";
import ButtonComponent from "../components/ButtonComponent";

const LoginScreen: React.FC = () => {
	const tailwind = useTailwind();

	return (
		<View style={ [ tailwind("px-6 pt-10 bg-neutral-900") ] }>
			<SafeAreaView>
				<Quote/>
				<ButtonComponent name="Sign in"/>
				<Text style={ [ tailwind('font-light font-sm text-neutral-300 text-center mt-2') ] }>
					By signing in you accept our Terms & Condition
					and Privacy Policy
				</Text>
			</SafeAreaView>
		</View>
	);
};

export default LoginScreen;
