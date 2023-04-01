import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";
import UserIcon from "../assets/UserIcon";
import { useNavigation } from "@react-navigation/native";
import BeerIcon from "../assets/BeerIcon";

interface SingleFriendPayload {
	userId: number | string
	userName: string
	image?: string
	favPiwo: string
}

const SingleFriend: React.FC<SingleFriendPayload> = ({
	 userName,
	image,
	userId,
	favPiwo,
}) => {

	const tailwind = useTailwind();

	const navigation = useNavigation();

	const handleUserNavigate = () => {
		navigation.navigate("ProfileScreen" as never, { userId } as never);
	}

	return (
		<TouchableOpacity
			onPress={ handleUserNavigate }
			style={ [ tailwind("flex flex-row items-center border-b-2 border-neutral-400 p-6 rounded-md mb-3") ] }
		>
			{
				image
					?
					<Image source={ { uri: image } } style={ [ tailwind("rounded-full h-10 w-10") ] }/>
					:
					<UserIcon fill={ tailwind('text-neutral-400').color as string } height={ 40 } width={ 40 }/>
			}
			<View style={ [ tailwind("ml-3") ] }>
				<Text style={ [ tailwind("text-neutral-400 text-2xl") ] }>
					{ userName }
				</Text>
				<Text style={ [ tailwind("text-neutral-400 text-sm") ] }>
					<BeerIcon height={ 15 } fill={ tailwind('text-neutral-400').color as string }/>
					{ favPiwo }
				</Text>
			</View>
		</TouchableOpacity>
	)
}

export default SingleFriend;