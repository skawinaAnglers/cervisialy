import React, { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useSelector } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import UserProfileHeader from "../components/UserProfileHeader";
import StatsCard from "../components/StatsCard";
import GameCard from "../components/GameCard";
import CrossIcon from "../assets/CrossIcon";
import CheckIcon from "../assets/CheckIcon";
import { RootState } from "../store";

const UserProfileScreen= () => {
	const { firebaseUser, user, posts } = useSelector((state: RootState) => state.user)
	const tailwind = useTailwind()
	
	const { wins, loses, winRate } = useMemo(() => {
		if (!user || !firebaseUser) return {
			wins: [],
			loses: [],
			winRate: 0
		}
		const gamesWon = posts.filter(post => post.winners && post.winners.includes(firebaseUser.uid))
		const gamesLost = posts.filter(post => post.losers && post.losers.includes(firebaseUser.uid))
		const currentWinRate = Math.floor(gamesWon.length / ((gamesWon.length + gamesLost.length) || 1) * 100)

		return {
			wins: gamesWon,
			loses: gamesLost,
			winRate: currentWinRate
		}
	}, [posts, user])

	const lastGames = useMemo(() => {
		const allGames = [...wins, ...loses]
		return allGames.sort((a, b) => b.createdAt - a.createdAt).slice(0, 3)
	}, [wins, loses])
	
	return (
		<View style={ [ tailwind("px-6 bg-neutral-900 pt-6") ] }>
			<SafeAreaView>
				<View>
					<UserProfileHeader
						userName={ user?.name || 'Unknown' }
						image={user?.avatar || ''}
					/>
					<View style={ [ tailwind("flex flex-row justify-between mt-7") ] }>
						<StatsCard
							count={wins.length}
							title="Wins"
							style={ [ tailwind("bg-neutral-300") ] }
						/>
						<StatsCard
							count={loses.length}
							title="Loses"
							style={ [ tailwind("bg-neutral-300") ] }
						/>
						<StatsCard
							count={winRate}
							title="Win rate"
							style={ [ tailwind("bg-neutral-300") ] }
						/>
					</View>
					<View style={ [ tailwind("mt-5") ] }>
						<Text style={ [ tailwind("font-semibold text-2xl text-neutral-300") ] }>
							Last games
						</Text>
						<FlatList
							data={lastGames}
							keyExtractor={(item, index) => item.id || `unknown-${index}`}
							renderItem={({ item }) => (
								<GameCard
									style={ [ tailwind("mt-3") ] }
									icon={ item.winners && item.winners.includes(firebaseUser?.uid || '') ? CheckIcon : CrossIcon }
									type={ item.winners && item.winners.includes(firebaseUser?.uid || '') ? 'win' : 'loss' }
									createdAt={item.createdAt}
								/>
							)}
						/>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default UserProfileScreen;