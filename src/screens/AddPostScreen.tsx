import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import SmallerMainButton from "../components/SmallerMainButton";
import MainButton from "../components/MainButton";
import Separator from "../components/Separator";
import IconBanner from "../components/IconBanner";
import BeerIcon from "../assets/BeerIcon";
import PreviewDisplay from "../components/PreviewDisplay";

const AddPostScreen: React.FC = () => {

	const tailwind = useTailwind();

	return (
		<View style={ [ tailwind("px-6 pt-10 bg-neutral-900") ] }>
			<SafeAreaView>
				<PreviewDisplay mainImage={""} secondaryImage={""} style={ [ tailwind("mb-4") ] }/>
				<IconBanner
					name="Recognized drink props"
					color="neutral-400"
					icon={ BeerIcon }
				/>
				<Separator/>
				<SmallerMainButton name="Add a new one"/>
				<MainButton
					name="Post"
					style={ [ tailwind("mt-4") ] }
				/>
			</SafeAreaView>
		</View>
	);
};

export default AddPostScreen;