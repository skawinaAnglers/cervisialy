import React, { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { StackNavigationProp } from "@react-navigation/stack";
import UserProfileHeader from "../components/UserProfileHeader";
import StatsCard from "../components/StatsCard";
import GameCard from "../components/GameCard";
import CrossIcon from "../assets/CrossIcon";
import CheckIcon from "../assets/CheckIcon";

interface AddPostParams {
	userId: string
}

const UserProfileScreen: React.FC<PropsWithChildren<any> & { route: StackNavigationProp<any> }> = ({ route }) => {

	const tailwind = useTailwind();

	const { userId } = route.params as AddPostParams;

	return (
		<View style={ [ tailwind("px-6 bg-neutral-900") ] }>
			<SafeAreaView>
				<View>
					<UserProfileHeader
						userName={ `MagnushChase-${ userId }` }
						image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjOTPaJ4NL4G0ZlkwAKxhen7H7YSxUrfBXA&usqp=CAU"
					/>
					<View style={ [ tailwind("flex flex-row justify-between mt-7") ] }>
						<StatsCard
							count={ 123 }
							title="Wins"
							style={ [ tailwind("bg-neutral-300") ] }
						/>
						<StatsCard
							count={ 123 }
							title="Loses"
							style={ [ tailwind("bg-neutral-300") ] }
						/>
						<StatsCard
							count="31%"
							title="Wins"
							style={ [ tailwind("bg-neutral-300") ] }
						/>
					</View>
					<View style={ [ tailwind("mt-5") ] }>
						<Text style={ [ tailwind("text-2xl text-neutral-300") ] }>
							Last games
						</Text>
						<GameCard
							style={ [ tailwind("bg-red-500 mt-3") ] }
							icon={ CrossIcon }
							title="LOSE"
							date="19:23 29.03.2023"
						/>
						<GameCard
							style={ [ tailwind("bg-green-500 mt-3") ] }
							icon={ CheckIcon }
							title="WIN"
							date="19:23 29.03.2023"
						/>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default UserProfileScreen;