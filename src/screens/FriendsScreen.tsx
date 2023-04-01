import React, { useState } from "react";
import { useTailwind } from "tailwind-rn";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RegularTextInput from "../components/RegularTextInput";
import SearchIcon from "../assets/SearchIcon";
import SingleFriend from "../components/SingleFriend";

const FriendsScreen: React.FC = () => {

	const tailwind = useTailwind();

	const [ search, setSearch ] = useState("");

	return (
		<View style={[tailwind('bg-neutral-900')]}>
			<SafeAreaView>
				<RegularTextInput
					style={ [ tailwind("px-6") ] }
					placeholder="Search"
					value={ search }
					onChangeText={ searchText => setSearch(searchText) }
					icon={ SearchIcon }
				/>
				<SingleFriend
					userId={ 10 }
					// image="https://i.ytimg.com/vi/PqB0ZQUwbKI/hqdefault.jpg"
					userName="User name"
					favPiwo="Żuberek"
				/>
			</SafeAreaView>
		</View>
	)
}

export default FriendsScreen;