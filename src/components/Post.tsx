import React, { useState } from "react";
import { useTailwind } from "tailwind-rn";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { getTimeDifference } from "../helpers/getTimeDifference";

interface PostPayload {
	mainImage: string,
	secondaryImage: string,
	userName: string,
	createdAt: number,
	index: number
}

const Post: React.FC<PostPayload> = ({
	mainImage,
	secondaryImage,
	userName,
	createdAt,
	index
}) => {

	const tailwind = useTailwind();

	const [ images, setImages ] = useState<{ mainImage: string, secondaryImage: string }>({ mainImage, secondaryImage })

	return (
		<View style={[ index % 2 === 1 ? tailwind('ml-3') : tailwind('mr-3')]}>
			<View style={ [ tailwind("rounded-b-md rounded-tr-md"), { aspectRatio: 1 } ] }>
				<Image source={ { uri: images.mainImage } } style={ [ tailwind("w-auto"), { aspectRatio: 1} ] }/>
				<TouchableOpacity
					style={ [ tailwind("absolute top-2 right-2 w-1/3"), { aspectRatio: 1 } ] }
					onPress={ () => setImages(prevState => ({ mainImage: prevState.secondaryImage, secondaryImage: prevState.mainImage })) }
				>
					<Image source={ { uri: images.secondaryImage } } style={ [ tailwind("rounded-md h-full w-full") ] }/>
				</TouchableOpacity>
			</View>
			<View style={[tailwind('flex flex-row justify-between mt-2')]}>
					<Text
						style={[
							tailwind('font-bold text-white text-[10px]')
						]}
					>
						{userName}
					</Text>
					<Text style={[tailwind('text-white ml-10 text-[10px]')]}>
						{getTimeDifference(createdAt)}
					</Text>
			</View>
		</View>
	);
};

export default Post;