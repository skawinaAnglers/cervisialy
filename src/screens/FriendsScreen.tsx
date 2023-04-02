import React, { useState } from "react";
import { useTailwind } from "tailwind-rn";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RegularTextInput from "../components/RegularTextInput";
import SearchIcon from "../assets/SearchIcon";
import SingleFriend from "../components/SingleFriend";

const FRIEND_LIST = [
	{
		id: 'asgaoikbsgbasgojuaosg',
		name: 'EnglandIPA1200',
		avatar: 'https://api.dicebear.com/6.x/pixel-art/png?seed=asgaoikbsgbasgojuaosg'
	},
	{
		id: 'sagsagasgasgasg',
		name: 'StayHydrated1215',
		avatar: 'https://api.dicebear.com/6.x/pixel-art/png?seed=sagsagasgasgasg'
	},
	{
		id: 'asgaoikbsgbhsdhsdhasgojuaosg',
		name: 'HelloWorld2115',
		avatar: 'https://api.dicebear.com/6.x/pixel-art/png?seed=asgaoikbsgbhsdhsdhasgojuaosg'
	},
	{
		id: 'jfhdjdfjdfjjfdj',
		name: 'LubiePlacki3030',
		avatar: 'https://api.dicebear.com/6.x/pixel-art/png?seed=jfhdjdfjdfjjfdj'
	},
	{
		id: 'asgaoikbsvccnvcnnvngbasgojuaosg',
		name: 'HelloDarkness1222',
		avatar: 'https://api.dicebear.com/6.x/pixel-art/png?seed=asgaoikbsvccnvcnnvngbasgojuaosg'
	}
] as { id: string, name: string, avatar: string }[]

const FriendsScreen: React.FC = () => {

	const tailwind = useTailwind();

	const [ search, setSearch ] = useState("");

	return (
		<View style={[tailwind('bg-neutral-900 px-6 pt-4')]}>
			<SafeAreaView>
				<Text style={ [ tailwind('font-bold text-4xl mb-6 text-neutral-300 mt-2') ] }>
					Friends
				</Text>
				<FlatList 
					data={ FRIEND_LIST }
					renderItem={ ({ item }) => (
						<SingleFriend {...item} />
					)}
					keyExtractor={ item => item.id }
				/>
			</SafeAreaView>
		</View>
	)
}

export default FriendsScreen;