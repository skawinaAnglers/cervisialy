import React, { useState } from "react";
import { useTailwind } from "tailwind-rn";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RegularTextInput from "../components/RegularTextInput";
import SearchIcon from "../assets/SearchIcon";
import SingleFriend from "../components/SingleFriend";

const FriendsScreen: React.FC = () => {

	const tailwind = useTailwind();

	const [ search, setSearch ] = useState("");

	return (
		<View style={[tailwind('bg-neutral-900 px-6 pt-4')]}>
			<SafeAreaView>
				<Text style={ [ tailwind('font-bold text-4xl mb-6 text-neutral-300 mt-2') ] }>
					Friends
				</Text>
				<RegularTextInput
					placeholder="Search"
					value={ search }
					onChangeText={ searchText => setSearch(searchText) }
					icon={ SearchIcon }
				/>
				<SingleFriend
					userId={ 10 }
					avatar="https://i.ytimg.com/vi/PqB0ZQUwbKI/hqdefault.jpg"
					name="KapitolHaze2115"
				/>
			</SafeAreaView>
		</View>
	)
}

export default FriendsScreen;