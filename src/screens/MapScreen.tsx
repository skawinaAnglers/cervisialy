import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useMemo } from "react";
import { useTailwind } from "tailwind-rn";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import MapScreenModal from "../components/modals/MapScreenModal";
import { RootState } from "../store";

interface Location {
	id: number
	flankaId: string | null
	userIds: string[]
}

export interface ModalConfig {
	isOpen: boolean
	spotId: null | number
}

const MapScreen: React.FC = () => {
	const tailwind = useTailwind();
	const { spots } = useSelector((state: RootState) => state.user)

	const squares = [ ...Array(12 * 21).keys()]

	const [ modal, setModal ] = useState<ModalConfig>({ isOpen: false, spotId: null });

	const gameSpots = useMemo(() => spots.filter((spot) => spot.gameUsers.length > 0), [spots])

	return (
		<>
			<MapScreenModal
				modalConfig={ modal }
				toggleModalOpen={ () => setModal(prevState => ({ ...prevState, isOpen: !prevState.isOpen })) }
			/>
			<View>
				<View>
					<Image style={ [ tailwind("h-full w-full") ] } source={ require("../assets/map.png") }/>
					<View style={ [ tailwind("absolute top-0 left-0 w-full h-full"), { backgroundColor: "rgba(0, 0, 0, .5)" } ] }>
						<SafeAreaView>
							<FlatList
								data={ squares }
								horizontal={ false }
								contentContainerStyle={ [ tailwind("flex justify-between") ] }
								scrollEnabled={false}
								renderItem={
									item =>
										<TouchableOpacity
											onPress={ () => setModal(prevState => ({ isOpen: !prevState.isOpen, spotId: item.item })) }
											style={
												[ tailwind("border border-neutral-900/20 flex w-1/12"),
												{ aspectRatio: 1 },
												item.item % 2 === 0 ? tailwind("bg-neutral-900/10") : tailwind('bg-neutral-900/5'),
												gameSpots.findIndex(element => element.id === item.item) !== -1 && tailwind("bg-red-500/10 border-red-500/30")
											]
											}
										>
											<Text style={ [ tailwind("text-transparent") ] }>
												{ item.item }
											</Text>
										</TouchableOpacity>
								}
								keyExtractor={ item => item.toString() }
								numColumns={ 12 }
							/>
						</SafeAreaView>
					</View>
				</View>
			</View>
		</>
	);
};

export default MapScreen;