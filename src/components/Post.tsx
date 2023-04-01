import React, { useState } from "react";
import { useTailwind } from "tailwind-rn";
import { Image, Text, TouchableOpacity, View } from "react-native";
import LikeIcon from "../assets/LikeIcon";
import FilledLikeIcon from "../assets/FilledLikeIcon";

interface PostPayload {
	mainImage: string;
	secondaryImage: string;
	userName: string;
	piwoName: string;
	description: string;
	time: string;
	likesCount: number;
	commentsCount: number;
}

const Post: React.FC<PostPayload> = ({
	mainImage,
	secondaryImage,
	userName,
	piwoName,
	description,
	time,
	likesCount,
	commentsCount,
}) => {

	const tailwind = useTailwind();

	const [ isLiked, toggleLiked ] = useState(false);

	const [ images, setImages ] = useState<{ mainImage: string, secondaryImage: string }>({ mainImage, secondaryImage })

	return (
		<View>
			<View style={ [ tailwind("bg-emerald-900 w-32 rounded-t-md p-1 text-lg text-emerald-500") ] }>
				<Text>
					{ userName }
				</Text>
			</View>
			<View style={ [ tailwind("relative w-full border-4 border-emerald-900 rounded-b-md rounded-tr-md"), { aspectRatio: 1 } ] }>
				<Image source={ { uri: images.mainImage } } style={ [ tailwind("w-full h-full") ] }/>
				<TouchableOpacity
					style={ [ tailwind("absolute top-5 right-5 w-24 h-24") ] }
					onPress={ () => setImages(prevState => ({ mainImage: prevState.secondaryImage, secondaryImage: prevState.mainImage })) }
				>
					<Image source={ { uri: images.secondaryImage } } style={ [ tailwind("rounded-md h-full w-full") ] }/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={ () => toggleLiked(liked => !liked) }
					style={ [ tailwind("absolute bottom-4 right-4") ] }
				>
					{
						isLiked
							?
							<LikeIcon height={ 40 } width={ 40 }/>
							:
							<FilledLikeIcon fill="red" height={ 40 } width={ 40 }/>
					}
				</TouchableOpacity>
			</View>
			<View>
				<View>

				</View>
				{/* <View> */}
				{/* 	<Text>{ userName }</Text> */}
				{/* 	<Text>{ piwoName }</Text> */}
				{/* </View> */}
				{/* <View> */}
				{/* 	<Text>{ description }</Text> */}
				{/* 	<Text>{ time }</Text> */}
				{/* </View> */}
			</View>
		</View>
	);
};

export default Post;