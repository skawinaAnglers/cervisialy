import { Text, Pressable, View, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import React, { useState, useCallback } from "react"
import { useTailwind } from "tailwind-rn"
import BeerIcon from "../assets/BeerIcon"
import BaseModal from "./modals/BaseModal"
import FeatureButton from "./FeatureButton"
import CameraIcon from "../assets/CameraIcon"
import CompassIcon from "../assets/CompassIcon"

const MenuButton: React.FC = () => {
	const tailwind = useTailwind()
	const { reset } = useNavigation()
	const [isVisible, setIsVisible] = useState<boolean>(false)



	const handlePress = useCallback((screenName: string) => {
		reset({
			index: 0,
			routes: [{ name: screenName as never }]
		})
		setIsVisible(false)
	}, [])

	return (
		<>
			<Pressable
				onPress={() => {
					setIsVisible(true)
				}}
				style={({ pressed }) => [
					tailwind('absolute bottom-0 flex flex-row justify-center items-center py-1 px-2 rounded-lg'),
					pressed ?
						tailwind('bg-emerald-800') :
						tailwind('bg-emerald-900'),
					{
						marginBottom: 136
					}
				]}
			>
				<BeerIcon width={16} height={16} fill={tailwind('text-emerald-500').color as string} />
				<Text style={[ tailwind('ml-2 font-semibold text-lg text-emerald-500 font-bold') ]}>
					Menu
				</Text>
			</Pressable>
			
			<BaseModal
				isVisible={isVisible}
				onDismiss={() => setIsVisible(false)}
			>
				<FeatureButton
					text='Add post'
					icon={CameraIcon}
					onPress={() => handlePress('CameraScreen')}
					colorHex={tailwind('text-emerald-700').color as string}
				/>

		     <View
			     style={[
						 tailwind('flex-row pr-6'),
			     ]}
		     >
			     <FeatureButton
						text='MS AGH Flanki'
						icon={BeerIcon}
						onPress={() => handlePress('FlankiScreen')}
						colorHex={tailwind('text-teal-600').color as string}
						vertical
						style={[tailwind('mr-6')]}
					 />
					 <FeatureButton
						text='MS AGH Tracker'
						icon={CompassIcon}
						onPress={() => handlePress('TrackerScreen')}
						colorHex={tailwind('text-yellow-600').color as string}
						vertical
					 />

		     </View>
			</BaseModal>
		</>

	)
}

export default MenuButton