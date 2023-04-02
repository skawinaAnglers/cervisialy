import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";
import UserIcon from "../assets/UserIcon";
import BeerIcon from "../assets/BeerIcon";

interface SingleFriendPayload {
	id: string
	name: string
	avatar: string
}

const SingleFriend: React.FC<SingleFriendPayload> = ({
	name,
	avatar,
	id
}) => {

	const tailwind = useTailwind();

	const navigation = useNavigation();

	const handleUserNavigate = () => {
		navigation.navigate("ProfileScreen" as never, { id } as never);
	}
	

	return (
		<TouchableOpacity
			onPress={ handleUserNavigate }
			style={ [ tailwind("flex flex-row items-center border-b-2 border-neutral-400 p-6 rounded-md mb-3") ] }
		>
			<Image source={ { uri: avatar } } style={ [ tailwind("rounded-full h-10 w-10") ] }/>
			<View style={ [ tailwind("ml-3") ] }>
				<Text style={ [ tailwind("text-neutral-400 text-2xl") ] }>
					{ name }
				</Text>
			</View>
		</TouchableOpacity>
	)
}

export default SingleFriend