import React, { useState } from "react";
import { useTailwind } from "tailwind-rn";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RegularTextInput from "../components/RegularTextInput";
import SearchIcon from "../assets/SearchIcon";

const FriendsScreen: React.FC = () => {

	const tailwind = useTailwind();

	const [ search, setSearch ] = useState("");

	return (
		<View style={[tailwind('px-6 bg-neutral-900')]}>
			<SafeAreaView>
				<RegularTextInput
					placeholder="Search"
					value={ search }
					onChangeText={ searchText => setSearch(searchText) }
					icon={ SearchIcon }

				/>
			</SafeAreaView>
		</View>
	)
}

export default FriendsScreen;